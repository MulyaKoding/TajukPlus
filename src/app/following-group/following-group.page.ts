import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-following-group',
  templateUrl: './following-group.page.html',
  styleUrls: ['./following-group.page.scss'],
})
export class FollowingGroupPage  {

  constructor(public alertController: AlertController) { }

  
  async btnClick(){
    const alert = await this.alertController.create({
      header: 'Anda yakin ingin keluar group?',
      buttons: ['Ya','Tidak']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

}
