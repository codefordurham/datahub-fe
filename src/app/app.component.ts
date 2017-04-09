import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeForDurham DataHub';
  views: string[] = [];

  onCategoriesChange(views: string[]) {
        this.views = views;
  }
}
