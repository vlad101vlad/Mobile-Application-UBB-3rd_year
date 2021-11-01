import {Component, Input, OnInit} from '@angular/core';
import {Contest} from "../shared/contest";

@Component({
  selector: 'funfest-detail-item',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() contestDetail: Contest;


  public isExpanded = false;

  constructor() { }

  ngOnInit() {}

  expandDetail(): void {
    this.isExpanded = !this.isExpanded;
  }
}
