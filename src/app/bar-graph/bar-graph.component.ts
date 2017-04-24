import { Component, OnInit, Input } from '@angular/core';
import { BarGraphData } from '../datahubTypes';

import Chart from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})

export class BarGraphComponent implements OnInit {
  public barGraphOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @Input() public data: BarGraphData;

  public barGraphType:string = 'bar';
  public barGraphLegend:boolean = true;

  // events
  public chartClicked(e:any):void {
  }

  public chartHovered(e:any):void {
  }

  ngOnInit() {}
}
