import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeStaffPageRoutingModule } from './home-staff-routing.module';

import { HomeStaffPage } from './home-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeStaffPageRoutingModule
  ],
  declarations: [HomeStaffPage]
})
export class HomeStaffPageModule {}
