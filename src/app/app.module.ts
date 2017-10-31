import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article.compoent';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'article', component: ArticleComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
