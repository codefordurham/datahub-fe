import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
  categories = [
    {name: "one-two", checked: false},
    {name: "three",   checked: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
