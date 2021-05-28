import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QouteDetailsPage } from './qoute-details.page';

const routes: Routes = [
  {
    path: '',
    component: QouteDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QouteDetailsPageRoutingModule {}
