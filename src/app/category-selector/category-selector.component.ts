import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
  //Once we wire up to the back end, this will all come from real data
  categories = [
    {name: "one-two", views: [ "one", "two" ], checked: true},
    {name: "three",   views: [ "three" ],      checked: true}
  ];

  update() {
    let views: string[] = [];
    let category: any;
    let view: string;

    this.categories.forEach((category) => {
        if (category.checked) {
            category.views.forEach((view) => {
                views.push(view);
            });
        }
    });

    this.onCategoriesChange.emit(views);
  }

  @Output() onCategoriesChange = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
    this.update();
  }

}
