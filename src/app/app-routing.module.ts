/*
 * File: app-routing.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 1:10:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 1:04:14 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
