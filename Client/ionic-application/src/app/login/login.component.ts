import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'funfest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {}

  goToRegister(): void{
    this.router.navigateByUrl('/register').then(r => console.log("navigated"));
  }
}
