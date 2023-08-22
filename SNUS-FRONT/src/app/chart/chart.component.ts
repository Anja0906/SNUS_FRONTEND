import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TagService} from "../service/tag.service";
import {AnalogInput} from "../model/AnalogInput";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit{
  @Input() name!: string;
  @Input() type!: string;

  view: [number, number] = [700, 700];
  Legend: string = "Legend";
  chartData: { name: string; value: number }[] = [];
  chartColors: { name: string; value: string }[] = [];
  aiTags : AnalogInput[] | undefined;
  colors: any;
  data: any;

  constructor(private tagService : TagService) {}

  ngOnInit(): void {
    if (this.type=="AI"){
      this.getAiTags();
    }
  }

  async getAiTags(){
    this.aiTags = await this.tagService.getAIsByName(this.name);
    this.setChartData();
  }

  setChartData(){
    if (this.aiTags!=undefined){
      for (let aiTag of this.aiTags) {
        if (aiTag != null && aiTag.dateTime != null){
          this.chartData.push({ name: aiTag.dateTime.toString(), value: aiTag.value });
          console.log({ name: aiTag.dateTime.toString(), value: aiTag.value });
          let firstLimit = Math.floor(aiTag.highLimit / 3);
          let secondLimit = firstLimit * 2;
          if (aiTag.value <= firstLimit){
            this.chartColors.push({ name: aiTag.dateTime.toString(), value: '#ffe680' })
          }
          if (aiTag.value <= secondLimit){
            this.chartColors.push({ name: aiTag.dateTime.toString(), value: '#ffb84d' })
          }
          if (aiTag.value > secondLimit){
            this.chartColors.push({ name: aiTag.dateTime.toString(), value: '#ff6666' })
          }
        }
      }
    }
    this.data = this.chartData;
    this.colors = this.chartColors;
  }


}
