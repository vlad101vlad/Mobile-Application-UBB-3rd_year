import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../service/network.service";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public connected = true;

  constructor(private networkService: NetworkService) {
    this.setupSubscriptions();
  }

  ngOnInit() {
  }

  private setupSubscriptions() {
    this.networkService.getStatusChangeMsg().subscribe((response) => {
      if (response) {
        this.connected = response.connected;
      }
    });
  }
}
