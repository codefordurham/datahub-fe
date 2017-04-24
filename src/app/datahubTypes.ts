
export class LineGraphData {
}

export class BarGraphData {
  labels: string[];
  data: {data:number[], label: string }[];
}

export class BoxPlotData {
}

export class ViewInfo {
  title: string;
  color: string;
  type: string;
  data: LineGraphData | BarGraphData | BoxPlotData;
}
