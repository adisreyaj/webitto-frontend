/*
 * File: favicon.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 8:29:54 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { nanoid } from 'nanoid';

import { FileValidationHelper } from '@helpers/file-validation.helper';
import { FileUploadService } from '@services/file-upload/file-upload.service';
import { SnackbarComponent } from '@components/snackbar/snackbar.component';
import { snackbarOptions } from '@config/snackbar.config';
import { FileUploadOptions, IconGenerateTypes } from '@services/file-upload/file-upload.interface';

@Component({
  selector: 'app-favicon',
  templateUrl: './favicon.component.html',
  styleUrls: ['./favicon.component.scss'],
})
export class FaviconComponent implements OnInit {
  progress = 0;
  file: File;
  fileName: string;
  isUploading = false;
  isFileUploaded = false;
  sectionHeader = {
    title: 'Favicon Generator',
    subtitle: `Favicons and App Icons will give identity to your web applications on the web. Favicons will be displayed on the browser tabs, bookmark list and more.
    Appicons are mainly used when the website is viewed on mobile devices. When you add the application to Home screen, these icons will be displayed.
    `,
  };
  constructor(private fileUploadService: FileUploadService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  fileSelected(file: File) {
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

  reset() {
    this.file = null;
    this.fileName = null;
    this.isFileUploaded = false;
    this.isUploading = false;
  }

  generateAssets() {
    const uploadOptions: FileUploadOptions = {
      id: nanoid(),
      file: this.file,
      type: IconGenerateTypes.favicon,
    };
    this.fileUploadService.uploadFiles(uploadOptions).subscribe((event: HttpEvent<any>) => {
      console.log({ event });

      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.isUploading = true;
          this.progress = Math.round((event.loaded / event.total) * 100);
          break;
        case HttpEventType.Response:
          if (event.status === 201) {
            console.log('File uploaded successfully!', event.body);
            this.isFileUploaded = true;
            this.router.navigate(['/favicon-generator', 'download', uploadOptions.id]);
          } else {
            this.showSnackbar({ message: 'Something went wrong..Please try again!', type: 'error' });
          }
          this.isFileUploaded = false;
          this.progress = 0;
          this.isUploading = false;
      }
    });
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
