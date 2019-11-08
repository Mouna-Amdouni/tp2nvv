import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';
import{FormsModule} from '@angular/forms';
import { Ex5Component } from './ex5/ex5.component';


@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
