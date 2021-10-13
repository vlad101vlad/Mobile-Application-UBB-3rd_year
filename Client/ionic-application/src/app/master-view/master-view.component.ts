import { Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss'],
})
export class MasterViewComponent implements OnInit {
  public contests: string[] = [`contest1`, `contest2`, `contest3`];

  constructor() { }

  ngOnInit() {}

}
