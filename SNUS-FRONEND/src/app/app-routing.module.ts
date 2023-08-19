import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CreateTagComponent} from "./create-tag/create-tag.component";
import {TagDisplayComponent} from "./tag-display/tag-display.component";
import {CreateAlarmComponent} from "./create-alarm/create-alarm.component";
import {AlarmDisplayComponent} from "./alarm-display/alarm-display.component";
import {ReportsComponent} from "./reports/reports.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";
import {TagDetailComponent} from "./tag-detail/tag-detail.component";
import {ChartComponent} from "./chart/chart.component";
import {DonutChartComponent} from "./donut-chart/donut-chart.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent,
    children: [
      {path: 'tagDisplay', component: TagDisplayComponent},
      {path: 'createAlarm', component: CreateAlarmComponent},
      {path: 'alarmDisplay', component: AlarmDisplayComponent},
      {path: 'reports', component: ReportsComponent}] },
  {path: 'createTag', component: CreateTagComponent},
  {path: 'tagDisplay', component: TagDisplayComponent},
  {path: 'createAlarm/:id', component: CreateAlarmComponent},
  {path: 'reports', component: ReportsComponent},
  { path:'', component: AppComponent},
  { path: 'tag/:name/:type', component: TagDetailComponent},
  { path: 'chart', component: DonutChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
