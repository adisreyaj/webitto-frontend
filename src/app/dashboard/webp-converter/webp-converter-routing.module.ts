import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpConverterComponent } from './webp-converter.component';

const routes: Routes = [{ path: '', component: WebpConverterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpConverterRoutingModule {}
