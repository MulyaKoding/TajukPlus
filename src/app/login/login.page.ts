import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}
  btnClicked(){
    this.router.navigateByUrl('register');
  }

  btnClick(){
    this.router.navigateByUrl('lupa-password');
  }
  goBack(){
    this.router.navigateByUrl('home')
  }

  ngOnInit() {
  }

}
