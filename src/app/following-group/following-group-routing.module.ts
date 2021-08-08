import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowingGroupPage } from './following-group.page';

const routes: Routes = [
  {
    path: '',
    component: FollowingGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowingGroupPageRoutingModule {}
