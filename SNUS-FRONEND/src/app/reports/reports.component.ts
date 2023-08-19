import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TagDto} from "../model/TagDto";
import {TagService} from "../service/tag.service";
import {Router} from "@angular/router";
import {Alarm} from "../model/Alarm";
import {ReportsService} from "../service/reports.service";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent{
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  title: string = "Title";
  inputValue:number=0;
  colorScheme = [
    { name: "Current value", value: '#435892' },
    { name: "To alarm", value: '#182034' },
  ]
  alarmData: Alarm[] | undefined;
  tagData: TagDto[] | undefined;
  lineChartData = [
    {
      "name": "Aruba",
      "series": [
        {
          "value": 3101,
          "name": "2016-09-22T14:21:25.897Z"
        },
        {
          "value": 6176,
          "name": "2016-09-23T23:06:59.427Z"
        },
        {
          "value": 6664,
          "name": "2016-09-17T19:36:58.696Z"
        },
        {
          "value": 5856,
          "name": "2016-09-20T18:57:03.269Z"
        },
        {
          "value": 5638,
          "name": "2016-09-13T22:04:42.108Z"
        }
      ]
    },
    {
      "name": "Botswana",
      "series": [
        {
          "value": 4299,
          "name": "2016-09-22T14:21:25.897Z"
        },
        {
          "value": 6857,
          "name": "2016-09-23T23:06:59.427Z"
        },
        {
          "value": 3984,
          "name": "2016-09-17T19:36:58.696Z"
        },
        {
          "value": 3320,
          "name": "2016-09-20T18:57:03.269Z"
        },
        {
          "value": 3217,
          "name": "2016-09-13T22:04:42.108Z"
        }
      ]
    },
    {
      "name": "Zimbabwe",
      "series": [
        {
          "value": 4487,
          "name": "2016-09-22T14:21:25.897Z"
        },
        {
          "value": 5332,
          "name": "2016-09-23T23:06:59.427Z"
        },
        {
          "value": 6781,
          "name": "2016-09-17T19:36:58.696Z"
        },
        {
          "value": 3102,
          "name": "2016-09-20T18:57:03.269Z"
        },
        {
          "value": 4262,
          "name": "2016-09-13T22:04:42.108Z"
        }
      ]
    },
    {
      "name": "Anguilla",
      "series": [
        {
          "value": 5472,
          "name": "2016-09-22T14:21:25.897Z"
        },
        {
          "value": 6247,
          "name": "2016-09-23T23:06:59.427Z"
        },
        {
          "value": 3019,
          "name": "2016-09-17T19:36:58.696Z"
        },
        {
          "value": 5260,
          "name": "2016-09-20T18:57:03.269Z"
        },
        {
          "value": 2804,
          "name": "2016-09-13T22:04:42.108Z"
        }
      ]
    },
    {
      "name": "Kiribati",
      "series": [
        {
          "value": 3434,
          "name": "2016-09-22T14:21:25.897Z"
        },
        {
          "value": 5406,
          "name": "2016-09-23T23:06:59.427Z"
        },
        {
          "value": 2182,
          "name": "2016-09-17T19:36:58.696Z"
        },
        {
          "value": 2609,
          "name": "2016-09-20T18:57:03.269Z"
        },
        {
          "value": 3905,
          "name": "2016-09-13T22:04:42.108Z"
        }
      ]
    }
  ];
  sixth: boolean = true;
  selectedOption: string = "1";
  constructor(private reportService: ReportsService, private router: Router) {}

  async getData(){
    switch (this.selectedOption){
      case "1":
        this.firstReport("2022-07-28T01:24:07.1883847", "2024-07-28T01:24:07.1883847", 1);
        this.tagData = undefined;
        break;
      case "2":
        this.secondReport(1, 1);
        this.tagData = undefined;
        break;
      case "3":
        this.thirdReport("2022-07-28T01:24:07.1883847", "2024-07-28T01:24:07.1883847", 1);
        this.alarmData = undefined;
        break;
      case "4":
        this.fourthReport(1);
        this.alarmData = undefined;
        break;
      case "5":
        this.fifthReport(1);
        this.alarmData = undefined;
        break;
      case "6":
        this.sixthReport(0, 1, "Anja");
        this.alarmData = undefined;
        break;

    }
  }

  async firstReport(from: string, to: string, sort: number){
    this.alarmData = await this.reportService.getAlarmsByDateRange(from, to, sort);
  }
  async secondReport(priority: number, sort: number){
    this.alarmData = await this.reportService.getAlarmsByPriority(priority, sort);
  }
  async thirdReport(from: string, to: string, sort: number){
    this.tagData = await this.reportService.getAllTagsByDateRange(from, to, sort);
  }
  async fourthReport(sort:number){
    this.tagData = await this.reportService.getLastAiTags(sort);
  }
  async fifthReport(sort:number){
    this.tagData = await this.reportService.getLastDiTags(sort);
  }
  async sixthReport(type:number, sort:number, name:string){
    this.tagData = await this.reportService.findTagsByName(type, sort, name);
  }

  displayAlarm(item: Alarm) {

  }

  displayTag(item: TagDto) {
    this.router.navigate(['/tag', item.name, item.type]);
  }

}
