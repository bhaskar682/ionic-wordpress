import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditQoutePage } from './edit-qoute.page';

const routes: Routes = [
  {
    path: '',
    component: EditQoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditQoutePageRoutingModule {}
