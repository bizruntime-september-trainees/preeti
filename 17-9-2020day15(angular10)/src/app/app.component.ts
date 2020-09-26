import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2';
  print=""
  name="justin"
  //creating function
getName(){
  alert("hello!!");
}

//EVENT
myEvent(evt){
  console.log(evt);
}
// getName1(name){
//   alert("hello "+name);
// }

getVal(val)
{
  console.log(val);
  this.print=val;
}

}


