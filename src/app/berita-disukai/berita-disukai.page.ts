import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-berita-disukai',
  templateUrl: './berita-disukai.page.html',
  styleUrls: ['./berita-disukai.page.scss'],
})
export class BeritaDisukaiPage   {

  constructor( public alertController: AlertController) {}

  async btnClick(){
    const alert = await this.alertController.create({
      header: 'Apakah yakin berita ini akan di hapus?',
      message: 'Hapus Favorit?',
      buttons: ['No','Yes']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

}
