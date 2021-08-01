import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanPageRoutingModule } from './pengaturan-routing.module';

import { PengaturanPage } from './pengaturan.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanPageRoutingModule,
    TranslateModule
  ],
  declarations: [PengaturanPage]
})
export class PengaturanPageModule {}
