import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.scss']
})
export class StarRaterComponent implements OnChanges {

  @Input() numberOfStars = 5;

  @Input() rating = 0;
  // for two way binding syntax to work it needs "<variableName>Change", also ll need to call manually.
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  
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
    this.highlightByRating(this.rating);
  }

  public onStarMouseEnter(index: number) {
    this.highlightByRating(index + 1);
  }

  public onStarClick(index: number) {
    const newRating = index + 1;
    this.rating = this.rating == newRating ? newRating - 1 : newRating;
    this.highlightByRating(this.rating);
    this.ratingChange.emit(this.rating);
  }
  
  private highlightByRating(rating: number) {
    for (let index = 0; index < this.numberOfStars; index++) {
      this.starStates[index].enabled = (index < rating);
    }
  }

  private initStars() {
    this.starStates = [];
    for (let i = 0; i < this.numberOfStars; i++) {
      this.starStates.push({
        id: i,
        enabled: i < this.rating ? true : false
      });
    }
  }
}

interface starState {
  id: number,
  enabled: boolean
}