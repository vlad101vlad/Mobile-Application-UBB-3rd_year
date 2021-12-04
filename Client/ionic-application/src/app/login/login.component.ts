import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: AuthService,
    private alertController: AlertController
  ) {
  }

  ngOnInit() {}

  goToRegister(): void{
    this.router.navigateByUrl('/register').then(r => console.log('navigated'));
  }

  async login(username: string,password: string){
      this.loginService.loginUser(username, password).subscribe(
      async (response) => {
        this.router.navigateByUrl('/home', {replaceUrl: true});
      },
      async (errorResponse) => {
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: errorResponse.error.error,
          buttons: ['OK'],
        });
      }
    );
  }
}
