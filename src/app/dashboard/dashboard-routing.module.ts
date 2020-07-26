/*
 * File: dashboard-routing.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 2:24:14 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 8:00:15 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'pwa-assets-generator',
        loadChildren: () => import('./pwa/pwa.module').then((m) => m.PwaModule),
      },
      {
        path: 'favicon-generator',
        loadChildren: () => import('./favicon/favicon.module').then((m) => m.FaviconModule),
      },
      {
        path: 'webp',
        loadChildren: () => import('./webp-converter/webp-converter.module').then((m) => m.WebpConverterModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
