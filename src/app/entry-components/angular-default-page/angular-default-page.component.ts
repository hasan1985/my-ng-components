import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-default-page',
  templateUrl: './angular-default-page.component.html',
  styleUrls: ['./angular-default-page.component.scss']
})
export class AngularDefaultPageComponent implements OnInit {

  title = 'my-ng-components';

  constructor() { }

  ngOnInit(): void {
  }

}
