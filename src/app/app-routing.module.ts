import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentListsComponent } from './entry-components/my-component-lists/my-component-lists.component';
import { AngularDefaultPageComponent } from './entry-components/angular-default-page/angular-default-page.component';
import { TypeAheadExamplePageComponent } from './page-components/type-ahead-example-page/type-ahead-example-page.component';

const routes: Routes = [
    // sets up routes constant where you define your routes
    {
        path: 'my-component-lists',
        component: MyComponentListsComponent,
        children: [
            {
                path: 'app-type-ahead-example-page',
                component: TypeAheadExamplePageComponent
            }
        ]
    },
    { path: 'app-angular-default-page', component: AngularDefaultPageComponent },
    { path: '**', component: AngularDefaultPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
