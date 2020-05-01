/*
 * File: pwa-routing.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 4:08:01 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwaComponent } from './pwa.component';

const routes: Routes = [{ path: '', component: PwaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwaRoutingModule {}
