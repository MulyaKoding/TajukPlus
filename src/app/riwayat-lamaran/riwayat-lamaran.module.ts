import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiwayatLamaranPageRoutingModule } from './riwayat-lamaran-routing.module';

import { RiwayatLamaranPage } from './riwayat-lamaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiwayatLamaranPageRoutingModule
  ],
  declarations: [RiwayatLamaranPage]
})
export class RiwayatLamaranPageModule {}
