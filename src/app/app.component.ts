import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emailform';
  email:string='acelya';

  onSubmit(){
    console.log(this.email);
  }
}
