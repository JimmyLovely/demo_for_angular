import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component
import { AppComponent } from './app.component';

// Module
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
