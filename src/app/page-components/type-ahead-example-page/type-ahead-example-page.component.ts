import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-ahead-example-page',
  templateUrl: './type-ahead-example-page.component.html',
  styleUrls: ['./type-ahead-example-page.component.scss']
})
export class TypeAheadExamplePageComponent implements OnInit {

  constructor() { 
    let count = 0;
    this.changeMySwitchCaseValueAsync();
  }

  public readonly wordList = ["aab", "aaaab", "aac"];

  ngOnInit(): void {
  }

  public anyText = "test test";

  public initRating = 1;
  public newRating(newRating: number) {
    console.log("from parent component. Old rating was ", this.initRating, " new Rating is ", newRating);
    this.initRating = newRating; // not needed since two-way-binding is done on initRating;
  }

  // custom switch case
  targetCondition = 1;
  toMatchCondition_1 = 1;
  toMatchCondition_2 = 2;
  breakForMatchCondition_2 = true;
  changeMySwitchCaseValueAsync(): void {
    setTimeout(() => this.targetCondition = 2, 2000);
    setTimeout(() => this.breakForMatchCondition_2 = false, 4000);
    setTimeout(() => this.toMatchCondition_2 = 3, 6000);
    setTimeout(() => this.targetCondition = 3, 8000);
    setTimeout(() => this.breakForMatchCondition_2 = true, 10000);
  }
}
