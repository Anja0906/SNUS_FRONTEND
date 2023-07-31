import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { TagDisplayComponent } from './tag-display/tag-display.component';
import { CreateAlarmComponent } from './create-alarm/create-alarm.component';
import { AlarmDisplayComponent } from './alarm-display/alarm-display.component';
import { ReportsComponent } from './reports/reports.component';
import { DiTagComponent } from './di-tag/di-tag.component';
import { DoTagComponent } from './do-tag/do-tag.component';
import { AoTagComponent } from './ao-tag/ao-tag.component';
import { AiTagComponent } from './ai-tag/ai-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationBarComponent,
    LoginComponent,
    CreateTagComponent,
    TagDisplayComponent,
    CreateAlarmComponent,
    AlarmDisplayComponent,
    ReportsComponent,
    DiTagComponent,
    DoTagComponent,
    AoTagComponent,
    AiTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
