import { RestoService } from '../resto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.sass'],
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private router: ActivatedRoute, private restro: RestoService) {}
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.restro
      .getCurrentRestro(this.router.snapshot.params.id)
      .subscribe((result) => {
        console.warn(result);
        this.editResto = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
      });
  }
}
