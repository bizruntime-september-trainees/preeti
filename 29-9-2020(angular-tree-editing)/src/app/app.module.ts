//
import { DatabindingModule } from './data-module/databinding.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {
  PageService,
  SortService,
  FilterService
} from '@syncfusion/ej2-angular-treegrid';
import { SelfbindingComponent } from './selfbinding/selfbinding.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EnableeditingComponent } from './enableediting/enableediting.component';

@NgModule({
  declarations: [AppComponent, SelfbindingComponent, DatabindingComponent, EnableeditingComponent],

  imports: [BrowserModule, TreeGridModule, DatabindingModule ],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
