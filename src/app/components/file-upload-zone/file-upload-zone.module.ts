/*
 * File: file-upload-zone.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:02:32 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 5:32:51 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FileUploadZoneComponent } from './file-upload-zone.component';
import { FileUploadDirective } from './file-upload-directive/file-upload.directive';

@NgModule({
  declarations: [FileUploadZoneComponent, FileUploadDirective],
  imports: [CommonModule, FlexLayoutModule, ReactiveFormsModule],
  exports: [FileUploadZoneComponent],
})
export class FileUploadZoneModule {}
