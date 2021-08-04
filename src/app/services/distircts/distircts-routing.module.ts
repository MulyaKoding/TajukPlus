import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistirctsPage } from './distircts.page';

const routes: Routes = [
  {
    path: '',
    component: DistirctsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistirctsPageRoutingModule {}
