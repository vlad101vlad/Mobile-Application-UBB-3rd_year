import { Component, OnInit } from '@angular/core';
import {ContestServiceService} from '../service/contest-service.service';
import {Contest} from '../shared/model/contest';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'funfest-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss'],
})
export class MasterViewComponent implements OnInit {
  public listOfContests: Contest[];
  public saveContestMode = false;
  public currentPage = 1;
  public searchString = '';


  constructor(private contestService: ContestServiceService) { }

  ngOnInit() {
    this.fetchData();
    this.contestService.refreshContest.subscribe( _ => {
      console.log('before refreshContest()');
      this.fetchData();
      console.log('after refreshContest()');
    });
  }

   fetchData(): void {
    this.contestService.getContests().subscribe(contestList => {
      this.listOfContests = contestList;
      console.log(contestList);
    });
  }

  saveContest(contest: Contest): void{
    this.contestService.addContest(contest)
      .subscribe(_ => this.contestService.refreshContest.next(true));
  }

  changeSaveContestModeStatus(){
    this.saveContestMode = !this.saveContestMode;
  }

  setSearchString(ionInput: string){
    this.searchString = ionInput;
    console.log('Search: ' + this.searchString);
  }

  filterBy(substring: string, contest: Contest): boolean{
    const contestName = contest.title.toLowerCase();
    const result =  contestName.includes(substring);
    return result;
  }

  filterContests(substring: string): Contest[]{
    const toBeShown: Contest[] = [];
    this.listOfContests.forEach(contest => {
      if(this.filterBy(substring, contest)){
        toBeShown.push(contest);
      }
    });
    return toBeShown;
  }
}
