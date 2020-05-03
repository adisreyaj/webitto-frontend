/*
 * File: favicon-routing.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 7:57:56 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaviconComponent } from './favicon.component';

const routes: Routes = [
  { path: '', component: FaviconComponent },
  {
    path: 'download/:id',
    loadChildren: () => import('./favicon-download/favicon-download.module').then((m) => m.FaviconDownloadModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaviconRoutingModule {}
