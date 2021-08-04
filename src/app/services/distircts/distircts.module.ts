import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistirctsPageRoutingModule } from './distircts-routing.module';

import { DistirctsPage } from './distircts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistirctsPageRoutingModule
  ],
  declarations: [DistirctsPage]
})
export class DistirctsPageModule {}
