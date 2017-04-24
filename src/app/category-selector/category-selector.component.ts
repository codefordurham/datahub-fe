import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ViewInfo } from '../datahubTypes';
import categories from '../graphsTestData';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})

export class CategorySelectorComponent implements OnInit {
  //Once we wire up to the back end, this will all come from real data

  colors = [
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "BlueViolet",
    "Brown",
    "Cyan",
    "DarkRed",
    "Fuchsia",
    "Gold",
    "HotPink",
    "Navy",
    "OrangeRed",
    "Purple",
    "Turquoise"
  ]

  public categories = categories;

  update() {
    let views: ViewInfo[] = [];
    let category: any;
    let viewName: ViewInfo;

    let colorPointer: number = 0;

    categories.forEach((category) => {
        if (category.checked) {
            category.views.forEach((viewInfo) => {
              let view = viewInfo;
              view.color = this.colors[colorPointer];
              views.push(view);
            });
        }
        ++colorPointer;
        if (colorPointer == this.colors.length) {
            colorPointer = 0;
        }
    });

    this.onCategoriesChange.emit(views);
  }

  @Output() onCategoriesChange = new EventEmitter<ViewInfo[]>();

  constructor() { }

  ngOnInit() {
    this.update();
  }

}
