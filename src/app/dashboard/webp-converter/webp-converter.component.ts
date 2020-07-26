import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import * as FileSaver from 'file-saver';

import { FileValidationHelper } from '@helpers/file-validation.helper';
import { snackbarOptions } from '@config/snackbar.config';
import { SnackbarComponent } from '@components/snackbar/snackbar.component';
import { WebpConverterService, ConvertToWebPOptions } from './webp-converter.service';
import { FileUploadOptions, IconGenerateTypes } from '@services/file-upload/file-upload.interface';

@Component({
  selector: 'app-webp-converter',
  templateUrl: './webp-converter.component.html',
  styleUrls: ['./webp-converter.component.scss'],
})
export class WebpConverterComponent implements OnInit {
  sectionHeader = {
    title: 'WebP Converter',
    subtitle: `WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster. `,
  };

  progress = 0;
  file: File | Blob;
  fileName: string;
  isUploading = false;
  isConverted = false;
  savings: string;
  constructor(private webpService: WebpConverterService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  fileSelected(file: File) {
    console.log(file);

    const isFileValid = FileValidationHelper.validateFileProps(file).success;
    if (isFileValid) {
      this.file = file;
      this.fileName = file.name;
    } else {
      this.showSnackbar({ message: 'Please select a valid file', type: 'error' });
      console.error('😞 Please Select a valid Image file');
      this.file = null;
      this.fileName = null;
    }
  }

  convert() {
    const uploadOptions: ConvertToWebPOptions = {
      file: this.file as File,
    };
    this.webpService.convertImageToWebp(uploadOptions).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.isUploading = true;
          this.progress = Math.round((event.loaded / event.total) * 100);
          break;
        case HttpEventType.Response:
          if (event.status === 201) {
            this.isConverted = true;
            const converted = new Blob([event.body], { type: 'image/webp' });
            this.savings = `${Math.floor(((this.file.size - converted.size) / this.file.size) * 100)}%`;
            this.file = converted;
            this.showSnackbar({ message: 'Image converted successfully', type: 'success' });
          } else {
            this.showSnackbar({ message: 'Something went wrong..Please try again!', type: 'error' });
          }
          this.progress = 0;
          this.isUploading = false;
      }
    });
  }

  download() {
    const lastDot = this.fileName.lastIndexOf('.');
    const fileName = this.fileName.substring(0, lastDot);
    FileSaver.saveAs(this.file, `${fileName}.webp`);
  }

  reset() {
    this.file = null;
    this.fileName = null;
    this.isConverted = false;
    this.isUploading = false;
  }

  private showSnackbar({ message, type }: { message: string; type: 'error' | 'success' }) {
    const snackbarOptionsWithData = Object.assign(snackbarOptions, {
      data: {
        type,
        message,
      },
    });
    this.snackbar.openFromComponent(SnackbarComponent, snackbarOptionsWithData);
  }
}
