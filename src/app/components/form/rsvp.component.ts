import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  @ViewChild('rspvForm')
  rspvForm:NgForm;

  @ViewChild('nameInput')
  nameInput:NgModel;

  defValue = true;
  food=[false,false,false]

  constructor() { }

  ngOnInit() {
  }

  processRSVP(myform : NgForm){
    console.log('myform: ', myform.value);
    //the form
    console.log('Processing RSVP: ', this.rspvForm.value);
    for(let i of this.rspvForm.value){
      console.log('i = ', i, ', v = ', this.rspvForm.value[i]);
    }
    this.rspvForm.resetForm();
  }
}
