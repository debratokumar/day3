import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'This is Deb';
  age = 33
  DoB = '21-09-90'
  
  product = {
    name: 'I phone',
    color: 'black',
    price: '200tk',
    dis: '50',
    instock: 5
  }
}
