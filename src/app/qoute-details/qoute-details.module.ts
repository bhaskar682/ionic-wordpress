import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QouteDetailsPageRoutingModule } from './qoute-details-routing.module';

import { QouteDetailsPage } from './qoute-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QouteDetailsPageRoutingModule
  ],
  declarations: [QouteDetailsPage]
})
export class QouteDetailsPageModule {}
