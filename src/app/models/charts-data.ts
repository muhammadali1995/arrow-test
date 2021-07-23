import {ChartDataSets} from "chart.js";

export interface StateStats {
  jurisdiction: string,
  week_of_allocations: string,
  _1st_dose_allocations: number;
  _2nd_dose_allocations: number;
}


export interface ChartsData {
  labels: String[];
  dataset: ChartDataSets[];
}