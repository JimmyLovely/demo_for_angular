import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// Module
import { AppRoutingModule } from "./app-routing.module";

// Component
import { AppComponent } from './app.component';

// Service
import { IVmService } from './i-service/i-vm.service';
import { VmService } from './service/vm.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [{
    provide: IVmService,
    useClass: VmService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
