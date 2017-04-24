import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ViewListComponent } from './view-list/view-list.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';

import { ChartsModule } from 'ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ListItemComponent,
    ViewListComponent,
    CategorySelectorComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
