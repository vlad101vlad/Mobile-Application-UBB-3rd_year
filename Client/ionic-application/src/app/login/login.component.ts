import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {AuthCookie} from "../shared/model/auth_cookie";
import {AuthService} from "../service/auth.service";
import {JwtToken} from "../shared/model/jwtToken";

@Component({
  selector: 'funfest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authCookieBuilder: AuthCookie,
    private loginService: AuthService
  ) {
  }

  ngOnInit() {}

  goToRegister(): void{
    this.router.navigateByUrl('/register').then(r => console.log("navigated"));
  }

  login(username: string,password: string): void{
    console.log('Before sending to server');
    console.log(username, password);

    this.loginService.loginUser(username, password).subscribe(
      jwtToken => {
        console.log(jwtToken);
        this.authCookieBuilder.setAuth(jwtToken["jwtToken"]);
        console.log(this.authCookieBuilder.getAuth());
      }
    );
  }
}
