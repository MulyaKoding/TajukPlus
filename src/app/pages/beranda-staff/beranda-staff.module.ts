import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerandaStaffPageRoutingModule } from './beranda-staff-routing.module';

import { BerandaStaffPage } from './beranda-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerandaStaffPageRoutingModule
  ],
  declarations: [BerandaStaffPage]
})
export class BerandaStaffPageModule {}
