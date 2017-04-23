import { Component, OnInit, Input } from '@angular/core';
import { ViewInfo } from '../datahubTypes';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  @Input() views: ViewInfo[];
  constructor() { }

  ngOnInit() {
  }

}
