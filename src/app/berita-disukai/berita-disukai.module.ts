import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeritaDisukaiPageRoutingModule } from './berita-disukai-routing.module';

import { BeritaDisukaiPage } from './berita-disukai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeritaDisukaiPageRoutingModule
  ],
  declarations: [BeritaDisukaiPage]
})
export class BeritaDisukaiPageModule {}
