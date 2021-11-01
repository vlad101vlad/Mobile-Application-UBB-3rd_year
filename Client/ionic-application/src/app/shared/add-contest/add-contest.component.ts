import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contest} from "../contest";

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.scss'],
})
export class AddContestComponent implements OnInit {
  @Output() cancelAddMode = new EventEmitter<boolean>();
  @Output() saveContest = new EventEmitter<Contest>();

  constructor() { }

  ngOnInit() {}

  cancelModeActivated(): void{
    this.cancelAddMode.emit(false);
  }

  save(title: string, description: string): void {
    const contest = new Contest();
    contest.title = title;
    contest.description = description;

    this.saveContest.emit(contest);
  }

}
