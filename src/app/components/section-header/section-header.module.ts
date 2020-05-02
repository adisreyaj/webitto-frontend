/*
 * File: section-header.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 9:02:36 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 9:03:01 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SectionHeaderComponent } from './section-header.component';
@NgModule({
  declarations: [SectionHeaderComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SectionHeaderComponent],
})
export class SectionHeaderModule {}
