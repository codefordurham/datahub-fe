import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeForDurham DataHub';
  views: { title: string, color: string }[] = [];

  onCategoriesChange(views: { title: string, color: string }[]) {
        this.views = views;
  }
}
