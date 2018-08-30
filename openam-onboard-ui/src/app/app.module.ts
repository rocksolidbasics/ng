import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke-component';

@NgModule({
  declarations: [
    AppComponent, JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//Declaration for the Anuglar 'package' or 'module'. Every app requires atleast one module.
//Normally called as the AppModule by convention. A NgModule combines functionality from multiple files.
//The class AppModule is annotated with the @NgModule annotation above.
export class AppModule { }
