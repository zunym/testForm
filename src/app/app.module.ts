import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RsvpComponent } from './components/form/rsvp.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//ng g module material
import { MaterialModule} from './material.module';

// ng add @angular/material
// npm install --save @angular/flex-layout hammerjs

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
