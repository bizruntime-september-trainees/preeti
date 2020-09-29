// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// import { Ajax } from '@syncfusion/ej2-base';
// import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
// import { sampleData } from './datasource';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class DataBindingModule { }

// public data: Object[];

//   // Unblock the following to bind Remote Data
//   // public dataManager: DataManager;

//   // Unblock the following to bind using AJAX request
//   // @ViewChild('treegrid')
//   // public treegrid: TreeGridComponent;

// ngOnInit();: void {
//     this.data = sampleData;

//     // Unblock the following to bind Remote Data
//     // this.dataManager = new DataManager({
//     //   url:
//     //     'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
//     //   adaptor: new WebApiAdaptor(),
//     //   crossDomain: true
//     // });
//   };

//   // Unblock the following to bind using AJAX request
// click(e: any); : any; {
//     const ajax = new Ajax(
//       'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
//       'GET'
//     );
//     ajax.send();
//     // tslint:disable-next-line:typedef
//     ajax.onSuccess = function(data: string) {
//       this.treegrid.dataSource = JSON.parse(data);
//     }.bind(this);
//   // }
