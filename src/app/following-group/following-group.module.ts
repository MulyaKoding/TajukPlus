import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowingGroupPageRoutingModule } from './following-group-routing.module';

import { FollowingGroupPage } from './following-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingGroupPageRoutingModule
  ],
  declarations: [FollowingGroupPage]
})
export class FollowingGroupPageModule {}
