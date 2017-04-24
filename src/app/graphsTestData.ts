import { ViewInfo, LineGraphData, BarGraphData, BoxPlotData } from './datahubTypes';

let mockLineGraph: ViewInfo = {
  title: "lineGraph",
  type: "LineGraph",
  color: "",
  data: new LineGraphData()
}

let mockBarGraph: ViewInfo = {
  title: "barGraph",
  type: "BarGraph",
  color: "",
  data: new LineGraphData()
}

let mockBoxPlot: ViewInfo = {
  title: "boxPlot",
  type: "BoxPlot",
  color: "",
  data: new LineGraphData()
}

export default [
  {name: "one",     views: [ mockLineGraph ],   checked: true},
  {name: "two",     views: [ mockBarGraph ],           checked: true},
  {name: "three",   views: [ mockBoxPlot ],         checked: true},
];
