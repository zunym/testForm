import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testForm';

  // @ViewChild('form')
  // form: NgForm;

  // processForm(form: NgForm){
  //   const name = form.value.name;
  //   form.reset()

  // }
}
