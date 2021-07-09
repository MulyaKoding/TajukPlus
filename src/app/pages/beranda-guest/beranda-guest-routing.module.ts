import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerandaGuestPage } from './beranda-guest.page';

const routes: Routes = [
  {
    path: '',
    component: BerandaGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerandaGuestPageRoutingModule {}
