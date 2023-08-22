export interface SeriesData {
  value: number;
  name: string;
}

export interface ChartInput {
  name: string;
  series: SeriesData[];
}
