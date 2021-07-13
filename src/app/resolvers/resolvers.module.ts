import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResolversPageRoutingModule } from './resolvers-routing.module';

import { ResolversPage } from './resolvers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResolversPageRoutingModule
  ],
  declarations: [ResolversPage]
})
export class ResolversPageModule {}
