/*
 * File: favicon.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 7:57:56 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { FaviconRoutingModule } from './favicon-routing.module';
import { FaviconComponent } from './favicon.component';
import { FileUploadZoneModule } from '@components/file-upload-zone/file-upload-zone.module';
import { FileUploadProgressModule } from '@components/file-upload-progress/file-upload-progress.module';
import { WebittoButtonModule } from '@directives/webitto-buttons/webitto-button.module';
import { SectionHeaderModule } from '@components/section-header/section-header.module';
import { FileUploadPreviewModule } from '@components/file-upload-preview/file-upload-preview.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FaviconComponent],
  imports: [
    CommonModule,
    FaviconRoutingModule,
    FlexLayoutModule,
    FormsModule,
    FileUploadZoneModule,
    FileUploadPreviewModule,
    FileUploadProgressModule,
    WebittoButtonModule,
    SectionHeaderModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
})
export class FaviconModule {}
