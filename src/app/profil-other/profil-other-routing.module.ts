import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilOtherPage } from './profil-other.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilOtherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilOtherPageRoutingModule {}
