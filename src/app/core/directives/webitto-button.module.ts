/*
 * File: webitto-button.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 7:50:24 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 7:50:42 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebittoButtonDirective } from './webitto-button.directive';

@NgModule({
  declarations: [WebittoButtonDirective],
  imports: [CommonModule],
  exports: [WebittoButtonDirective],
})
export class WebittoButtonModule {}
