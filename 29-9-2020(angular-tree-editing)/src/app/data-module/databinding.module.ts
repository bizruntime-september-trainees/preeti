import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
// import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
// import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
// import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import {
  TreeGridModule,
  EditService,
  ToolbarService,
  CommandColumnService,
} from '@syncfusion/ej2-angular-treegrid';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreeGridModule,
    FormsModule
  //   NumericTextBoxAllModule,
  //   DatePickerAllModule,
  //   CheckBoxAllModule
   ],
  exports: [],
  providers: [EditService, ToolbarService, CommandColumnService],

})
export class DatabindingModule { }



