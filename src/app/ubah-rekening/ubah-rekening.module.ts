import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahRekeningPageRoutingModule } from './ubah-rekening-routing.module';

import { UbahRekeningPage } from './ubah-rekening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahRekeningPageRoutingModule
  ],
  declarations: [UbahRekeningPage]
})
export class UbahRekeningPageModule {}
