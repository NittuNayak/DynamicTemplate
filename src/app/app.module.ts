import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { CriteriatreeComponent } from './criteriatree/criteriatree.component';


@NgModule({
  declarations: [
    AppComponent,
    CriteriaComponent,
    CriteriatreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
