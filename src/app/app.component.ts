import { Component } from '@angular/core';
import { ViewInfo } from './datahubTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeForDurham DataHub';
  views: ViewInfo[] = [];

  onCategoriesChange(views: ViewInfo[]) {
        this.views = views;
  }
}
