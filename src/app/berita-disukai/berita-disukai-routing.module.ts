import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeritaDisukaiPage } from './berita-disukai.page';

const routes: Routes = [
  {
    path: '',
    component: BeritaDisukaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeritaDisukaiPageRoutingModule {}
