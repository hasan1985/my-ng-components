import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-ahead-example-page',
  templateUrl: './type-ahead-example-page.component.html',
  styleUrls: ['./type-ahead-example-page.component.scss']
})
export class TypeAheadExamplePageComponent implements OnInit {

  constructor() { }

  public readonly wordList = ["aab", "aaaab", "aac"];
  
  ngOnInit(): void {
  }

  public initRating = 1;
  public newRating(newRating: number) {
    console.log("from parent component. Old rating was ", this.initRating, " new Rating is ", newRating);
    this.initRating = newRating; // not needed since two-way-binding is done on initRating;
  }

}
