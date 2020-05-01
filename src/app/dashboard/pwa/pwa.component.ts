/*
 * File: pwa.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 12:12:18 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { FileValidationHelper } from '../../core/helpers/file-validation.helper';
import { FileUploadService } from '../../core/service/file-upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router,
  ) {}

  ngOnInit(): void {}

  fileSelected(file: File) {
    this.file = file;
    const isFileValid = FileValidationHelper.validatePWAIconFile(file).success;
    this.fileName = file.name;
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
}
