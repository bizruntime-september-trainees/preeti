import { Component } from '@angular/core';
import { sampleData } from './datasource';

import {PageSettingsModel ,  SortSettingsModel} from '@syncfusion/ej2-angular-grids';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
implements OnInit {
  // tslint:disable-next-line:ban-types
  public data: Object[];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;

  ngOnInit(): void {
    this.data = sampleData;
    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskID', direction: 'Descending' }
      ]
    };
    this.pageSettings = { pageSize: 6 };
  }
}
