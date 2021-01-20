import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Module
import { VmRoutingModule, VmComponents } from "./vm-routing.module";

@NgModule({
  declarations: [
    ...VmComponents
  ],
  imports: [
    CommonModule,
    FormsModule,

    VmRoutingModule
  ]
})
export class VmModule { }