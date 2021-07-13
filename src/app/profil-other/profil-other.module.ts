import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilOtherPageRoutingModule } from './profil-other-routing.module';

import { ProfilOtherPage } from './profil-other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilOtherPageRoutingModule
  ],
  declarations: [ProfilOtherPage]
})
export class ProfilOtherPageModule {}
