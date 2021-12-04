import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../service/network.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public connected = true;

  constructor(private networkService: NetworkService,
              private authService: AuthService,
              private router: Router) {
    this.setupSubscriptions();
  }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logoutUser();
    this.router.navigateByUrl('/', {replaceUrl: true});
  }

  private setupSubscriptions() {
    this.networkService.getStatusChangeMsg().subscribe((response) => {
      if (response) {
        this.connected = response.connected;
      }
    });
  }
}
