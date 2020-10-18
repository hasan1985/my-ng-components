import { Component, OnInit, OnChanges, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from 'protractor';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.scss']
})
export class StarRaterComponent implements OnChanges {

  @Input() numberOfStars = 5;
  @Input() rating = -1;
  @Output() onRatingChange;

  public readonly starChar = "&#9733";
  public starStates: starState[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initStars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.numberOfStars) {
      this.initStars();
    }
  }

  public onContainerMouseLeave() {
    this.highlight(this.rating);
    console.log("onMouseoutFromContainer");
  }

  public onStarMouseEnter(index: number) {
    this.highlight(index);
    console.log("onMouseoverStar");
  }

  public onStarClick(index: number) {
    this.rating = this.rating == index ? index - 1 : index;
    this.highlight(this.rating);
  }
  
  private highlight(index: number) {
    for (let i = 0; i < this.numberOfStars; i++) {
      this.starStates[i].enabled = (i <= index);
    }
  }

  private initStars() {
    this.starStates = [];
    for (let i = 0; i < this.numberOfStars; i++) {
      this.starStates.push({
        id: i,
        enabled: false
      });
    }
  }
}

interface starState {
  id: number,
  enabled: boolean
}