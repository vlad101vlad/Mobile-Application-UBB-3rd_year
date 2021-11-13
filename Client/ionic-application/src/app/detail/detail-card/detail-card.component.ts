import {Component, Input, OnInit} from '@angular/core';
import {Contest} from "../../shared/model/contest";

@Component({
  selector: 'funfest-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent implements OnInit {
  @Input() contest: Contest;

  constructor() { }

  ngOnInit() {}

}
