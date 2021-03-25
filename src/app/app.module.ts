import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }