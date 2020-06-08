import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentListsComponent } from './entry-components/my-component-lists/my-component-lists.component';
import { AngularDefaultPageComponent } from './entry-components/angular-default-page/angular-default-page.component';

const routes: Routes = [
  // sets up routes constant where you define your routes
  {path: 'my-component-lists', component: MyComponentListsComponent},
  {path: 'app-angular-default-page', component: AngularDefaultPageComponent},
  {path: '**', component: AngularDefaultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
