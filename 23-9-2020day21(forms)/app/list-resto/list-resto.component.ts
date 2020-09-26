import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.sass'],
})
export class ListRestoComponent implements OnInit {
  constructor(private restro: RestoService) {}
  collection: any = [];
  ngOnInit(): void {
    //this will return observable
    //  console.warn(this.restro.getList());
    this.restro.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }
  deleteRestro(item) {
    this.restro.deleteRestro(item).subscribe((result) => {
      console.warn(result);
      this.collection.splice(item - 1, 1);
    });
  }
}
