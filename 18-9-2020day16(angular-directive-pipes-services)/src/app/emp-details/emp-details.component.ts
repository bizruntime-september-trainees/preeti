import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  public employees = [];
  public errorMsg;

  // tslint:disable-next-line:variable-name
  constructor(private _employeeService: EmployeeService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);

  }

}
