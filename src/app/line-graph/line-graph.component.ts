import { Component, OnInit, Input } from '@angular/core';
import { LineGraphData } from '../datahubTypes';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  @Input() public data: LineGraphData;

  constructor() { }

  ngOnInit() {
  }

}
