import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DonutChartComponent implements OnInit{
  @Input() percentage!: number;
  colorScheme = [
    { name: "Current value", value: '#435892' },
    { name: "To alarm", value: '#182034' },
  ]
  p!:number;
  data !: { name: string; value: number; }[];
  constructor() {}

  ngOnInit(): void {
    this.p=this.percentage;
    this.data = [
      { name: 'Current value', value: this.p },
      { name: 'To alarm', value: (100-this.p) }
    ];
  }
}
