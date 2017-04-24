import { ViewInfo, LineGraphData, BarGraphData, BoxPlotData } from './datahubTypes';

let mockLineGraph: ViewInfo = {
  title: "lineGraph",
  type: "LineGraph",
  color: "",
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data:[
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ]
  }
}

let mockBarGraph: ViewInfo = {
  title: "barGraph",
  type: "BarGraph",
  color: "",
  data: {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    data: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      { data: [28, 48, 40, 19, 86, 27, 12], label: 'Series B'}
    ]
  }
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
