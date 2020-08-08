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

}
