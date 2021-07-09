import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerandaStaffPage } from './beranda-staff.page';

const routes: Routes = [
  {
    path: '',
    component: BerandaStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerandaStaffPageRoutingModule {}
