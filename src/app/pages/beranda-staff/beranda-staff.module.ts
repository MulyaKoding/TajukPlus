import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerandaStaffPageRoutingModule } from './beranda-staff-routing.module';

import { BerandaStaffPage } from './beranda-staff.page';

import { NgCircleProgressModule } from 'ng-circle-progress'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerandaStaffPageRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "outerStrokeWidth": 20,
      "innerStrokeWidth": 5,
      "outerStrokeGradient": true,
      "outerStrokeColor": "#3DBDCF",
      "outerStrokeGradientStopColor": "#55BF30",
      "innerStrokeColor":"#e7e8ea",
      "title": "70",
      "titleColor": "blackgi",
      "animationDuration":1000,
      "showBackground": false,
      "startFromZero": false,
      "responsive": true,
      "titleFontSize": "60",
      "unitsFontSize": "50",
      "subtitleFontSize": "35" 
    })
  ],
  declarations: [BerandaStaffPage]
})
export class BerandaStaffPageModule {}
