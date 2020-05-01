/*
 * File: pwa.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 11:22:07 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { FileValidationHelper } from '../../core/helpers/file-validation.helper';
import { FileUploadService } from '../../core/service/file-upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

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
  constructor(private fileUploadService: FileUploadService) {}

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
            console.log('File uploaded successfully!', event.body);
            this.isUploading = false;
            this.isFileUploaded = true;
        }
      });
  }

  downloadAssets() {
    this.fileUploadService.downloadFile('123').subscribe((data: any) => {
      this.extractData(data);
    });
  }

  private extractData(res: string) {
    let myBlob: Blob = new Blob([res], {
      type: 'application/zip',
    });
    const fileURL = URL.createObjectURL(myBlob);
    const win = window.open(fileURL, '_blank');
    win.opener = null;
    win.focus();
  }
}
