import {Component, ViewEncapsulation} from '@angular/core';
import {TagDto} from "../model/TagDto";
import {Alarm} from "../model/Alarm";
import {ReportsService} from "../service/reports.service";
import {ChartInput} from "../model/ChartInterfaces";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent{
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  title: string = "Title";
  priority:number=0;
  colorScheme = [
    { name: "Current value", value: '#435892' },
    { name: "To alarm", value: '#182034' },
  ]
  alarmData: Alarm[] | undefined;
  tagData: TagDto[] | undefined;

  showErrorPopup: boolean = false;
  errorMessage: string = '';

  selectedSort: string = 'Time';
  selectedSortType: string = 'Ascending';

  showError(message:string) {
    this.errorMessage = message;
    this.showErrorPopup = true;
  }
  lineChartData: ChartInput[] = [];
  sixth: boolean = false;
  selectedOption: string = "1";
  selectedTagType: string = "0";
  name: string = "";
  constructor(private reportService: ReportsService) {}

  closeErrorPopup() {
    this.showErrorPopup = false;
  }

  onDropdownChange(newValue: string) {
    if (newValue=="6"){
      this.sixth = true;
      this.selectedSort = "Value";
    }
    else{
      this.selectedSort = "Time";
    }
  }

  async getData(){
    switch (this.selectedOption){
      case "1":
        await this.firstReport();
        this.tagData = undefined;
        break;
      case "2":
        await this.secondReport();
        this.tagData = undefined;
        break;
      case "3":
        await this.thirdReport();
        this.alarmData = undefined;
        break;
      case "4":
        await this.fourthReport();
        this.alarmData = undefined;
        break;
      case "5":
        await this.fifthReport();
        this.alarmData = undefined;
        break;
      case "6":
        await this.sixthReport();
        this.alarmData = undefined;
        break;

    }
  }

  async firstReport(){
    if(this.dateFrom==undefined){
      this.showError("You need to choose the date from!")
    }
    else if (this.dateTo==undefined){
      this.showError("You need to choose the date to!")
    }
    else{
      if (this.selectedSortType=="Ascending" && this.selectedSort=="Priority"){
        this.alarmData = await this.reportService.getAlarmsByDateRange(this.dateFrom.toLocaleString(), this.dateTo.toLocaleString(), 2);
        this.initAlarmGraph(this.alarmData)
      }
      else if (this.selectedSortType=="Ascending" && this.selectedSort=="Time"){
        this.alarmData = await this.reportService.getAlarmsByDateRange(this.dateFrom.toLocaleString(), this.dateTo.toLocaleString(), 1);
        this.initAlarmGraph(this.alarmData)
      }
      else if (this.selectedSortType=="Descending" && this.selectedSort=="Priority"){
        this.alarmData = await this.reportService.getAlarmsByDateRange(this.dateFrom.toLocaleString(), this.dateTo.toLocaleString(), 4);
        this.initAlarmGraph(this.alarmData)
      }
      else{
        this.alarmData = await this.reportService.getAlarmsByDateRange(this.dateFrom.toLocaleString(), this.dateTo.toLocaleString(), 3);
        this.initAlarmGraph(this.alarmData)
      }
    }
  }
  async secondReport(){
    if (this.selectedSortType=="Ascending"){
      this.alarmData = await this.reportService.getAlarmsByPriority(this.priority, 0);
      this.initAlarmGraph(this.alarmData)
    }
    else{
      this.alarmData = await this.reportService.getAlarmsByPriority(this.priority, 1);
      this.initAlarmGraph(this.alarmData)
    }
  }
  async thirdReport(){
    if(this.dateFrom==undefined){
      this.showError("You need to choose the date from!")
    }
    else if (this.dateTo==undefined){
      this.showError("You need to choose the date to!")
    }
    else{
      if (this.selectedSortType=="Ascending"){
        this.tagData = await this.reportService.getAllTagsByDateRange(this.dateFrom.toLocaleString(), this.dateTo.toLocaleString(), 0);
        this.initTagGraph(this.tagData)
      }
      else{
        this.tagData = await this.reportService.getAllTagsByDateRange(this.dateFrom.toLocaleString(), this.dateTo.toLocaleString(), 0);
        this.initTagGraph(this.tagData)
      }
    }
  }
  async fourthReport(){
    if (this.selectedSortType=="Ascending"){
      this.tagData = await this.reportService.getLastAiTags(0);
      this.initTagGraph(this.tagData)
    }
    else{
      this.tagData = await this.reportService.getLastAiTags(1);
      this.initTagGraph(this.tagData)
    }
  }
  async fifthReport(){
    if (this.selectedSortType=="Ascending"){
      this.tagData = await this.reportService.getLastDiTags(0);
      this.initTagGraph(this.tagData)
    }
    else{
      this.tagData = await this.reportService.getLastDiTags(1);
      this.initTagGraph(this.tagData)
    }
  }
  async sixthReport(){
    if(this.name==""){
      this.showError("You need to input name of tag!")
    }
    else {
      if (this.selectedSortType=="Ascending"){
        this.tagData = await this.reportService.findTagsByName(parseInt(this.selectedTagType, 10), 0, this.name);
        this.initTagGraph(this.tagData)
      }
      else{
        this.tagData = await this.reportService.findTagsByName(parseInt(this.selectedTagType, 10), 1, this.name);
        this.initTagGraph(this.tagData)
      }
    }
  }

  initTagGraph(data: TagDto[] | undefined){
    let chartData: ChartInput[]=[]
    const lowest: ChartInput = {
      name: "Values",
      series: []
    };
    if (data){
      for (let d of data) {
        lowest.series.push({name: d.dateTime.toLocaleString(), value:d.value})
      }
      this.lineChartData.push(lowest);
    }
    chartData.push(lowest);
    this.lineChartData = chartData;
  }

  initAlarmGraph(data: Alarm[] | undefined){
    let chartData: ChartInput[]=[]
    const lowest: ChartInput = {
      name: "Values",
      series: []
    };
    if (data){
      for (let d of data) {
        let randomNumber = Math.floor(Math.random() * 21);
        lowest.series.push({name: d.timeStamp.toLocaleString(), value:d.threshHold+randomNumber})
      }
    }
    chartData.push(lowest);
    this.lineChartData = chartData;
  }
}
