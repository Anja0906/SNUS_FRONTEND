import {Component, OnInit} from '@angular/core';
import {Alarm, AlarmDto} from "../model/Alarm";
import {AlarmService} from "../service/alarm.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alarm-table',
  templateUrl: './alarm-table.component.html',
  styleUrls: ['./alarm-table.component.css']
})
export class AlarmTableComponent implements OnInit{
  alarms : Alarm[] | undefined = []
  aiId:number = 0;
  constructor(private alarmService:AlarmService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.aiId = params['id'];
    });
  }

  ngOnInit(): void {
    this.initData()
  }

  async initData(){
    this.alarms = await this.alarmService.getAlarmsForAi(this.aiId);
    console.log(this.aiId)
  }

  deleteAlarm(alarm:Alarm, index: number) {
    this.alarms?.splice(index, 1);
    this.alarmService.deleteAlarm(alarm.id).subscribe(result => console.log("Deleted!"));
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
}
