import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeAheadComponent } from './my-components/type-ahead/type-ahead.component';
import { MyComponentListsComponent } from './entry-components/my-component-lists/my-component-lists.component';
import { AngularDefaultPageComponent } from './entry-components/angular-default-page/angular-default-page.component';
import { TypeAheadExamplePageComponent } from './page-components/type-ahead-example-page/type-ahead-example-page.component';
import { StarRaterComponent } from './my-components/star-rater/star-rater.component';
import { MySwitchCase, MySwitch, MySwitchDefault } from './my-directives/my-switch/my-switch.directive';


@NgModule({
  declarations: [
    AppComponent,
    TypeAheadComponent,
    MyComponentListsComponent,
    AngularDefaultPageComponent,
    TypeAheadExamplePageComponent,
    StarRaterComponent,
    MySwitch,
    MySwitchCase,
    MySwitchDefault,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
