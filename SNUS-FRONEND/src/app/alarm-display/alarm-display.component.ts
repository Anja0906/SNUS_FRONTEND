import { Component } from '@angular/core';
import {Alarm} from "../model/Alarm";
import {ReportsService} from "../service/reports.service";
import {AlarmService} from "../service/alarm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alarm-display',
  templateUrl: './alarm-display.component.html',
  styleUrls: ['./alarm-display.component.css']
})
export class AlarmDisplayComponent {
  alarmData: Alarm[] | undefined;
  constructor(private alarmService: AlarmService, private router: Router) {
    this.getData()
  }
  async getData(){
    this.alarmData = await this.alarmService.getAll();
  }

  getCellStyles(value: number) {
    let backgroundColor = '';
    switch (value) {
      case 1:
        backgroundColor = '#ffff99';
        break;
      case 2:
        backgroundColor = '#ffb84d';
        break;
      case 3:
        backgroundColor = '#ff4d4d';
        break;
      default:
        backgroundColor = '#ffff99';
    }

    return { 'background-color': backgroundColor };
  }

  async displayTag(item:Alarm) {
    let ai = await this.alarmService.getAiFromId(item.analogId);
    this.router.navigate(['/tag', ai?.name, "AI"]);
  }
}
