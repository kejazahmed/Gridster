import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';
import { items } from  './items';
@Component({
    selector: 'my-tabstrip',
    template: `                         
        <div style="width: 100%; padding-bottom: 60px;">  
            <my-menu></my-menu> 
        </div>            
        <div class="wrapper">        
            <kendo-tabstrip (tabSelect)="onTabSelect($event)">                
                <kendo-tabstrip-tab title="Gridster Example 1" [selected]="true">
                    <ng-template kendoTabContent>                   
                        <div style="width: 100%; height:800px; overflow:hidden;">
                         <my-grid [dashboardID]="1"></my-grid>
                        </div>
                    </ng-template>
                </kendo-tabstrip-tab>
                <kendo-tabstrip-tab title="Gridster Example 2">
                    <ng-template kendoTabContent>
                        <div style="width: 100%; height:800px; overflow:hidden;">
                             <my-grid [dashboardID]="2"></my-grid>
                        </div>                        
                    </ng-template>
                </kendo-tabstrip-tab>    
                <kendo-tabstrip-tab title="Gridster Example 3">
                    <ng-template kendoTabContent>
                        <div style="width: 100%; height:800px; overflow:hidden;">
                             <my-grid [dashboardID]="3"></my-grid>
                        </div>                        
                    </ng-template>
                </kendo-tabstrip-tab>                
            </kendo-tabstrip>
        </div>
    `,
    styles: [`
    burger-div:hover {
  background : yellow;
  height : 30px;
  width : 30px;
  border-radius : 25px
}
.fas {
    position: relative;
   
    font-size: 16px;
}
.fas:before {
    position: absolute;
    left:.5em;
    top: calc(50% - .5em);
}
            .burger {        
                              
            }

            .burger:hover {
              
            }
            .target {
                border-radius: 25px;
                color : blue;
                height: 100px;
                width: 400px;
                background-color: pink;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08);
            }
            .placeholder {
                font-size: 20px;
                color: purple;
                margin: 0;
            }
        .wrapper {
            display: flex;
            justify-content: center;
        }
        kendo-tabstrip {
            width: 98%;
        }
        .content {
            width:100%;
            padding: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 120px;
            height: 120px;
        }
        h2 {
            font-size: 4em;
            font-weight: lighter;
        }
        h2>span {
            padding-left: 5px;
            font-size: .3em;
            vertical-align: top;
        }
    `]
})
export class TabStripComponent {
    public items: any[] = items;    
    public onTabSelect(e: SelectEvent) {
        console.log(e);
    }
}
