import { Component, OnInit, Input } from '@angular/core';
import { ViewInfo, LineGraphData } from '../datahubTypes';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  opened: Boolean = false;

  @Input() viewInfo: ViewInfo;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.opened = !this.opened;
  }
}
