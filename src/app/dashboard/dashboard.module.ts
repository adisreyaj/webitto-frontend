/*
 * File: dashboard.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 2:24:14 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 4:36:19 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MatSnackBarModule,
  ],
})
export class DashboardModule {}
