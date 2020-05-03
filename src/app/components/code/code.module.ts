/*
 * File: code.module.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 8:42:55 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 8:43:09 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  imports: [CommonModule],
  exports: [CodeComponent],
})
export class CodeModule {}
