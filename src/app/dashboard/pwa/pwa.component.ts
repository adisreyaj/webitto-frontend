/*
 * File: pwa.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 4:49:42 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FileValidationHelper } from '../../core/helpers/file-validation.helper';
import { FileUploadService } from '../../core/services/file-upload/file-upload.service';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { snackbarOptions } from '../../core/config/snackbar.config';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss'],
})
export class PwaComponent implements OnInit {
  progress = 0;
  file: File;
  fileName: string;
  isUploading = false;
  isFileUploaded = false;

  sectionHeader = {
    title: 'PWA Assets Generator',
    subtitle: `Your PWA needs to have icons so that it can be shown as App icons, or title bar icons etc. 
    There are different resolutions that needs to be present for it to work perfectly in all browsers.
    Just choose a good resolution image of your logo and upload it. 
    `,
  };
  constructor(
    private fileUploadService: FileUploadService,
    private snackbar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  fileSelected(file: File) {
    const isFileValid = FileValidationHelper.validatePWAIconFile(file).success;
    if (isFileValid) {
      this.file = file;
      this.fileName = file.name;
    } else {
      this.showFileInvalidSnackbar();
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
    this.isUploading = true;
    this.fileUploadService
      .uploadFiles({ id: '123', file: this.file })
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.progress = Math.round((event.loaded / event.total) * 100);
            break;
          case HttpEventType.Response:
            if (event.status === 200) {
              console.log('File uploaded successfully!', event.body);
              this.isFileUploaded = true;
            }
            this.progress = 0;
            this.isUploading = false;
            this.router.navigate(['/pwa', 'download', 123]);
        }
      });
  }

  private showFileInvalidSnackbar() {
    const snackbarOptionsWithData = Object.assign(snackbarOptions, {
      data: {
        type: 'error',
        message: 'Please select a valid image file',
      },
    });
    this.snackbar.openFromComponent(SnackbarComponent, snackbarOptionsWithData);
  }
}
