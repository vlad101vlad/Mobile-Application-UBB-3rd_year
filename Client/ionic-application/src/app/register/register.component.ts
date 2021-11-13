import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/model/user';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'funfest-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  register(username: string, password: string): void {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;

    this.authService.registerUser(newUser).subscribe();
  }

  doPasswordMatch(password: string, repassword: string): boolean {
    if(password === repassword && password.length > 0){
      return true;
    }
    return false;
  }

  ngOnInit() {}

}
