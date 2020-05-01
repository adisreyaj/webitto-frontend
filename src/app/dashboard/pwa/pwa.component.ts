/*
 * File: pwa.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 9:44:18 pm
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
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  fileSelected(file: File) {
    const isFileValid = FileValidationHelper.validatePWAIconFile(file).success;
    this.fileUploadService
      .uploadFiles({ id: '123', file })
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.progress = Math.round((event.loaded / event.total) * 100);
            break;
          case HttpEventType.Response:
            console.log('File uploaded successfully!', event.body);
        }
      });
  }
}
