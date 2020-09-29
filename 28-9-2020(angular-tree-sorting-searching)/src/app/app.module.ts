//

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {
  PageService,
  SortService,
  FilterService
} from '@syncfusion/ej2-angular-treegrid';
// import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [AppComponent],
    // DataBindingComponent, SelfBindingComponent, DataBindingModule],
  imports: [BrowserModule, TreeGridModule],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
