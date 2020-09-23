import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    // public ngFireAuth: AngularFireAuth{}
  ) { }

  ngOnInit() {
  }

   logMeIn(){
    //login to page even if its blankk
    this.router.navigate(["/home"]);
  }

}
