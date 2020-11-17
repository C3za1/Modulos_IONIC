import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSegmentPageRoutingModule } from './ion-segment-routing.module';

import { IonSegmentPage } from './ion-segment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSegmentPageRoutingModule,
    CommonModule
  ],
  declarations: [IonSegmentPage]
})
export class IonSegmentPageModule {}
