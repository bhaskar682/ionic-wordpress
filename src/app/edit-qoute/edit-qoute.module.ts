import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditQoutePageRoutingModule } from './edit-qoute-routing.module';

import { EditQoutePage } from './edit-qoute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditQoutePageRoutingModule
  ],
  declarations: [EditQoutePage]
})
export class EditQoutePageModule {}
