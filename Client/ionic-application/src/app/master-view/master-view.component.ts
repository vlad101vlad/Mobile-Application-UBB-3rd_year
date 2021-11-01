import { Component, OnInit } from '@angular/core';
import {ContestServiceService} from '../service/contest-service.service';
import {Contest} from '../shared/contest';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss'],
})
export class MasterViewComponent implements OnInit {
  public listOfContests: Contest[];
  public saveContestMode = false;

  constructor(private contestService: ContestServiceService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.contestService.getContests().subscribe(contestList => {
      this.listOfContests = contestList;
    });
  }

  changeSaveContestModeStatus(){
    this.saveContestMode = !this.saveContestMode;
  }
}
