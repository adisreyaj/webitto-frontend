/*
 * File: file-upload-progress.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 6:14:55 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 6:20:29 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadProgressComponent } from './file-upload-progress.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FileUploadProgressComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [FileUploadProgressComponent],
})
export class FileUploadProgressModule {}
