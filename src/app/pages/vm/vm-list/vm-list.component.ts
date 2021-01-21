import { Component, OnInit } from '@angular/core';

// Service
import { IVmService } from "../../../i-service/i-vm.service";

// Model
import { Vm } from 'src/app/model/vm';
@Component({
  selector: 'app-vm-list',
  templateUrl: './vm-list.component.html',
  styleUrls: ['./vm-list.component.scss']
})
export class VmListComponent implements OnInit {

  public vms: Vm[];
  public vm: Vm = new Vm();

  constructor(
    private vmService: IVmService
  ) { }

  ngOnInit(): void {
    this.vms = this.vmService.getAll();
  }

}