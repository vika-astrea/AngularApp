import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { HaveListComponent } from './have-list/have-list.component';
import { NeedListComponent } from './need-list/need-list.component';
import { FormsModule } from '@angular/forms';
import { SkillsService } from './skills.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    HaveListComponent,
    NeedListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [SkillsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
