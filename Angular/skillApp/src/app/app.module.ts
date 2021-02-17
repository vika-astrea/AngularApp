import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { HaveListComponent } from './have-list/have-list.component';
import { NeedListComponent } from './need-list/need-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    HaveListComponent,
    NeedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
