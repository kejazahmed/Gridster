import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { FormsModule } from "@angular/forms";
import { IconsModule } from "@progress/kendo-angular-icons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { ContextMenuModule } from '@progress/kendo-angular-menu';

import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';
import { ChartComponent } from './chart.component';
import { TabStripComponent } from './tabstrip.component';

const appRoutes: Routes = [
  
  { path: 'chart',      component: ChartComponent } , 
  { path: 'gridster',    component: GridComponent } , 
  { path: 'tabstrip',    component: TabStripComponent } , 
  { path: '', component: TabStripComponent}
];


@NgModule({
    bootstrap:    [AppComponent],
    declarations: [AppComponent, GridComponent, ChartComponent,TabStripComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports:[BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      LayoutModule,
      IconsModule,
      InputsModule,
      LabelModule,
      ButtonsModule,
      ChartsModule,
      DropDownsModule,
      ContextMenuModule,
      GridsterModule]
})
export class AppModule {}