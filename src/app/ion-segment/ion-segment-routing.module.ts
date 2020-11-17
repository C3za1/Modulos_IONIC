import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSegmentPage } from './ion-segment.page';

const routes: Routes = [
  {
    path: '',
    component: IonSegmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSegmentPageRoutingModule {}
