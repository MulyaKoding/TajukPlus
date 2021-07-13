import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResolversPage } from './resolvers.page';

const routes: Routes = [
  {
    path: '',
    component: ResolversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResolversPageRoutingModule {}
