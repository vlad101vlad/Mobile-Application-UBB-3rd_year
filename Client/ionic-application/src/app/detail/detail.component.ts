import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'funfest-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public isExpanded = false;

  constructor() { }

  ngOnInit() {}

  expandDetail(): void {
    this.isExpanded = !this.isExpanded;
  }
}
