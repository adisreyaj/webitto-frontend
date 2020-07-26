import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { WebpConverterRoutingModule } from './webp-converter-routing.module';
import { WebpConverterComponent } from './webp-converter.component';
import { WebittoButtonModule } from '@directives/webitto-buttons/webitto-button.module';
import { SectionHeaderModule } from '@components/section-header/section-header.module';
import { FileUploadZoneModule } from '@components/file-upload-zone/file-upload-zone.module';
import { FileUploadPreviewModule } from '@components/file-upload-preview/file-upload-preview.module';
import { FileUploadProgressModule } from '@components/file-upload-progress/file-upload-progress.module';

@NgModule({
  declarations: [WebpConverterComponent],
  imports: [
    CommonModule,
    WebpConverterRoutingModule,
    FlexLayoutModule,
    WebittoButtonModule,
    SectionHeaderModule,
    FileUploadZoneModule,
    FileUploadPreviewModule,
    FileUploadProgressModule,
  ],
})
export class WebpConverterModule {}
