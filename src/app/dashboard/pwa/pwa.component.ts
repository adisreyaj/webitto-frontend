/*
 * File: pwa.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 8:30:08 pm
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
import { PWAAdvancesSettingsEvent } from './pwa-advanced-settings/pwa-advances-settings.interface';
import { FileUploadOptions, IconGenerateTypes } from '@services/file-upload/file-upload.interface';

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
  advancedSettings: PWAAdvancesSettingsEvent = undefined;
  isAdvancedSettingsApplied = false;
  sectionHeader = {
    title: 'PWA Assets Generator',
    subtitle: `Your PWA needs to have icons so that it can be shown as App icons, or title bar icons etc.
    There are different resolutions that needs to be present for it to work perfectly in all browsers.
    Just choose a good resolution image of your logo and upload it.
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

  updateSettings(settings: PWAAdvancesSettingsEvent) {
    this.advancedSettings = settings;
  }

  toggleAdvancedSettings(event: boolean) {
    this.isAdvancedSettingsApplied = event;
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
      type: IconGenerateTypes.pwa,
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
            this.router.navigate(['/pwa-assets-generator', 'download', uploadOptions.id]);
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
