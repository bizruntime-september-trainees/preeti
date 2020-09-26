import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.sass'],
})
export class AddRestoComponent implements OnInit {
  constructor(private restro: RestoService) {}
  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  ngOnInit(): void {}

  collectRestro() {
    this.restro.saveRestro(this.addResto.value).subscribe((result) => {
      this.alert = true;
    });
    this.addResto.reset({});
  }
  closeAlert() {
    this.alert = false;
  }
}
