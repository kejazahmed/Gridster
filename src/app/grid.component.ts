import { Component, Input } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'my-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
 
    @Input() dashboardID;

    options: GridsterConfig;
    dashboard: Array<GridsterItem>;
 
  ngOnInit() {
    this.options = {
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true//,
        //stop: this.eventStop.bind(this)
      },      
      margin:5,
      displayGrid:"none",
      gridType:"verticalFixed",
      swap: true,
      fixedColWidth:6,
      fixedRowHeight:17,
      pushItems: true,
      minCols:5,
      maxCols:12,
      minRows:5,
      maxRows:1000            
    };
    
    if (this.dashboardID == "1") {
            this.dashboard = [     
                {cols: 12, rows: 12, x: 0, y: 0},
                {cols: 8, rows: 11, x: 12, y: 0},
                {cols: 2, rows: 11, x: 12, y: 8},
                {cols: 2, rows: 11, x: 12, y: 10},
                {cols: 8, rows: 11, x: 23, y: 0},
                {cols: 2, rows: 11, x: 23, y: 8},
                {cols: 2, rows: 11, x: 23, y: 10}      
            ];
    }
    else if (this.dashboardID == "2") {
        this.dashboard = [     
            {cols: 6, rows: 13, x: 0, y: 0},
            {cols: 6, rows: 13, x: 0, y: 6},
            {cols: 4, rows: 13, x: 13, y: 0},
            {cols: 2, rows: 13, x: 13, y: 8},
            {cols: 2, rows: 13, x: 13, y: 6},
            {cols: 2, rows: 13, x: 13, y: 4},
            {cols: 2, rows: 13, x: 13, y: 10}      
        ];
    }
    else if (this.dashboardID == "3") {
        this.dashboard = [     
            {cols: 4, rows: 13, x: 0, y: 0},
            {cols: 5, rows: 13, x: 0, y: 4},
            {cols: 3, rows: 13, x: 0, y: 9},
            {cols: 3, rows: 15, x: 13, y: 0},
            {cols: 3, rows: 15, x: 13, y: 3},
            {cols: 3, rows: 15, x: 13, y: 6},
            {cols: 3, rows: 15, x: 13, y: 9},
            {cols: 3, rows: 13, x: 28, y: 0},
            {cols: 3, rows: 13, x: 28, y: 3},
            {cols: 6, rows: 13, x: 28, y: 6},            
            {cols: 6, rows: 10, x: 41, y: 0},     
            {cols: 6, rows: 10, x: 41, y: 6}      
        ];
    }

  }

  changedOptions() {      
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    const item: GridsterItem = { cols: 4, rows: 13, y: 0, x: 0 };
    this.dashboard.push(item);
  }
}
