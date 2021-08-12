import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayatLamaranPage } from './riwayat-lamaran.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayatLamaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayatLamaranPageRoutingModule {}
