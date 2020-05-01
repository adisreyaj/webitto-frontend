/*
 * File: pwa-download.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 11:53:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 12:03:29 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwaDownloadRoutingModule } from './pwa-download-routing.module';
import { PwaDownloadComponent } from './pwa-download.component';
import { WebittoButtonModule } from '../../../core/directives/webitto-buttons/webitto-button.module';
import { SectionHeaderModule } from '../../../components/section-header/section-header.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PwaDownloadComponent],
  imports: [
    CommonModule,
    PwaDownloadRoutingModule,
    FlexLayoutModule,
    WebittoButtonModule,
    SectionHeaderModule,
  ],
})
export class PwaDownloadModule {}
