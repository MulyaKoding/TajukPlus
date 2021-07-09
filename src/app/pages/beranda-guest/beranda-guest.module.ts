import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerandaGuestPageRoutingModule } from './beranda-guest-routing.module';

import { BerandaGuestPage } from './beranda-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerandaGuestPageRoutingModule
  ],
  declarations: [BerandaGuestPage]
})
export class BerandaGuestPageModule {}
