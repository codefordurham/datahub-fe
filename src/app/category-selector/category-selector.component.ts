import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  categories = [
    {name: "one-two", views: [ "one", "two" ], checked: true},
    {name: "three",   views: [ "three" ],      checked: true}
  ];

  update() {
    let views: { title: string, color: string }[] = [];
    let category: any;
    let viewName: string;

    let colorPointer: number = 0;

    this.categories.forEach((category) => {
        if (category.checked) {
            category.views.forEach((viewName) => {
                let view = { title: "", color: ""};
                view.title = viewName;
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

  @Output() onCategoriesChange = new EventEmitter<{ title: string, color: string}[]>();

  constructor() { }

  ngOnInit() {
    this.update();
  }

}
