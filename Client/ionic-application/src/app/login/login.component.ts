import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {AuthCookie} from "../shared/model/auth_cookie";
import {AuthService} from "../service/auth.service";
import {async} from "rxjs";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'funfest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authCookieBuilder: AuthCookie,
    private loginService: AuthService,
    private alertController: AlertController
  ) {
  }

  ngOnInit() {}

  goToRegister(): void{
    this.router.navigateByUrl('/register').then(r => console.log("navigated"));
  }

  async login(username: string,password: string){
    console.log('Before sending to server');
    console.log(username, password);

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
