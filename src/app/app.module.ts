import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module
import { AppRoutingModule } from "./app-routing.module";

// Service
import { IVmService } from "./i-service/i-vm.service";
import { VmMockService } from "./mock/vm.service";

// Component
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule
  ],
  providers: [
    {
      provide: IVmService,
      useClass: VmMockService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
