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
    {name: "one",       views: [ "blueone", "bluetwo" ], checked: true},
    {name: "two",       views: [ "red" ],      checked: true},
    {name: "three",     views: [ "green" ],      checked: true},
    {name: "four",      views: [ "yellow" ],      checked: true},
    {name: "five",      views: [ "BlueViolet" ],      checked: true},
    {name: "six",       views: [ "Brown" ],      checked: true},
    {name: "seven",     views: [ "Cyan" ],      checked: true},
    {name: "eight",     views: [ "DarkRed" ],      checked: true},
    {name: "nine",      views: [ "Fuchsia" ],      checked: true},
    {name: "ten",       views: [ "Gold" ],      checked: true},
    {name: "eleven",    views: [ "HotPink" ],      checked: true},
    {name: "twelve",    views: [ "Navy" ],      checked: true},
    {name: "thirteen",  views: [ "OrangeRed" ],      checked: true},
    {name: "fourteen",  views: [ "Purple" ],      checked: true},
    {name: "fifteen",   views: [ "Turquoise" ],      checked: true},
    {name: "sixteen",   views: [ "blueWraparound" ],      checked: true}
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
