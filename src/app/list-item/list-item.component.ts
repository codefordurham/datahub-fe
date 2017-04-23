import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  opened: Boolean = false;

  @Input() viewTitle: string;
  @Input() public viewColor: string;

  constructor() {
    console.log(this.viewTitle);
  }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.opened = !this.opened;
  }
}
