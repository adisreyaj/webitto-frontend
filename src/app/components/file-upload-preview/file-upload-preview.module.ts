/*
 * File: file-upload-preview.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 10:40:30 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 10:40:57 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizeModule } from '../../core/pipes/file-size.module';
import { FileUploadPreviewComponent } from './file-upload-preview.component';

@NgModule({
  declarations: [FileUploadPreviewComponent],
  imports: [CommonModule, FileSizeModule],
  exports: [FileUploadPreviewComponent],
})
export class FileUploadPreviewModule {}
