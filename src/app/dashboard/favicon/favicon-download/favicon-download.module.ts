/*
 * File: favicon-download.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 11:53:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 9:46:59 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { FaviconDownloadRoutingModule } from './favicon-download-routing.module';
import { FaviconDownloadComponent } from './favicon-download.component';
import { WebittoButtonModule } from '../../../core/directives/webitto-buttons/webitto-button.module';
import { SectionHeaderModule } from '../../../components/section-header/section-header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CodeModule } from '@components/code/code.module';

@NgModule({
  declarations: [FaviconDownloadComponent],
  imports: [
    CommonModule,
    FaviconDownloadRoutingModule,
    FlexLayoutModule,
    WebittoButtonModule,
    SectionHeaderModule,
    CodeModule,
    ClipboardModule,
  ],
})
export class FaviconDownloadModule {}
