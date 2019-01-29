import { NgModule } from '@angular/core';

// npm install --save rxjs@6.2.2
// npm install --save @angular/flex-layout@6.0.0-beta.17
import { FlexLayoutModule } from '@angular/flex-layout'

// https://material.angular.io/components/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

// npm install --save moment @angular/material-moment-adapter
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const MODULES = [
  FlexLayoutModule,
  MatToolbarModule, MatButtonModule,
  MatFormFieldModule, MatInputModule,
  MatRadioModule, MatIconModule,
  MatDatepickerModule, MatMomentDateModule,
  MatCheckboxModule, MatCardModule
]


@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class MaterialModule { }
