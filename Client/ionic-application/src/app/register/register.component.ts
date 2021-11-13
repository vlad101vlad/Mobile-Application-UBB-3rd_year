import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'funfest-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}

}
