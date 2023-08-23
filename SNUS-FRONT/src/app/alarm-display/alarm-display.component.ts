import {Component, OnInit} from '@angular/core';
import {Alarm} from "../model/Alarm";
import {AlarmService} from "../service/alarm.service";
import {Router} from "@angular/router";
import {SignalIRService} from "../service/signal-ir.service";

@Component({
  selector: 'app-alarm-display',
  templateUrl: './alarm-display.component.html',
  styleUrls: ['./alarm-display.component.css']
})
export class AlarmDisplayComponent implements OnInit{
  alarmData: Alarm[] | undefined;

  constructor(private alarmService: AlarmService, private router: Router, private signalRService: SignalIRService) {
    this.getData()
  }
  ngOnInit() {
    const hubConnection = this.signalRService.getConnection();

    hubConnection.on('ReceiveAlarm', (alarm) => {
      console.log("New allaaarm")
      this.getData()
    });
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
