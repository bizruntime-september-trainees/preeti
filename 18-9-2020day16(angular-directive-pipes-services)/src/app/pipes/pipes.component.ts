import { Component, Input, OnInit } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter<string>();

  public person = {
    firstName: 'John',
    lastName: 'Doe'
  };

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  fireEvent(){
    this.childEvent.emit('Hey'); }

}
