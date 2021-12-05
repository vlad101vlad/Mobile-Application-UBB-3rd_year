import {Component, Input, OnInit} from '@angular/core';
import {Contest} from '../shared/model/contest';
import {ContestServiceService} from '../service/contest-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'funfest-detail-item',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() contestDetail: Contest;


  public isExpanded = false;

  constructor(private contestService: ContestServiceService,
              private router: Router) { }

  ngOnInit() {}

  expandDetail(): void {
    this.isExpanded = !this.isExpanded;
  }

  deleteContest(){
    console.log('before deleteContest()');

    if(confirm('Are you sure you want to delete contest with \ntitle: <'
      + this.contestDetail.title + '> and \nid: <' + this.contestDetail.id + '>')){
      this.contestService.deleteContest(this.contestDetail.id).subscribe(
        _ => {
        alert('Contest was deleted successfully!');
        this.contestService.refreshContest.next(true);
      },
        error => {
          alert('There was an error while deleteing' + error);
        });
    }

    console.log('after deleteContest()');
  }
}
