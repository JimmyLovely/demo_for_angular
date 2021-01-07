import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { VmComponents, VmRoutingModule } from "./vm-routing.module";

@NgModule({
  declarations: [...VmComponents],
  imports: [
    CommonModule,
    VmRoutingModule
  ]
})
export class VmModule { }
