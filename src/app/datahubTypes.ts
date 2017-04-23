
export class LineGraphData {
  getLineGraphData() {}
}

export class BarGraphData {
  getBarGraphData() {}
}

export class BoxPlotData {
  getBoxPlotData() {}
}

export class ViewInfo {
  title: string;
  color: string;
  data: LineGraphData | BarGraphData | BoxPlotData;
}
