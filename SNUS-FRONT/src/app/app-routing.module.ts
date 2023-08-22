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
import {DonutChartComponent} from "./donut-chart/donut-chart.component";
import {AlarmTableComponent} from "./alarm-table/alarm-table.component";

const routes: Routes = [
  { path: 'main', component: MainComponent,
    children: [
      {path: 'tagDisplay', component: TagDisplayComponent},
      {path: 'createAlarm', component: CreateAlarmComponent},
      {path: 'alarmDisplay', component: AlarmDisplayComponent},
      {path: 'reports', component: ReportsComponent}] },
  {path: 'createTag', component: CreateTagComponent},
  {path: 'tagDisplay', component: TagDisplayComponent},
  {path: 'createAlarm/:id', component: CreateAlarmComponent},
  {path: 'AiAlarms/:id', component: AlarmTableComponent},
  {path: 'reports', component: ReportsComponent},
  { path:'', component: LoginComponent},
  { path: 'tag/:name/:type', component: TagDetailComponent},
  { path: 'chart', component: DonutChartComponent},
  { path: 'alarms', component: AlarmDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
