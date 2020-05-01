/*
 * File: dashboard.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 2:24:14 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 3:45:13 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent],
  imports: [CommonModule, DashboardRoutingModule, FlexLayoutModule],
})
export class DashboardModule {}
