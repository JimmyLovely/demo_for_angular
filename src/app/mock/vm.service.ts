import { Injectable } from '@angular/core';

// Service
import { IVmService } from "../i-service/i-vm.service";

// Model
import { Vm } from '../model/vm';

@Injectable({
  providedIn: 'root'
})
export class VmMockService implements IVmService{

  private vms: Vm[] = [
    {
      ip: '192.168.1.1',
      name: 'CN001'
    },
    {
      ip: '192.168.1.2',
      name: 'CN002'
    },
    {
      ip: '192.168.1.3',
      name: 'CN003'
    },
    {
      ip: '192.168.1.4',
      name: 'CN004'
    },
    {
      ip: '192.168.1.5',
      name: 'CN005'
    },
  ]

  constructor() { }

  getAll(): Vm[] {
    return this.vms;
  }
  getFirst(): Vm {
    return this.vms[0];
  }

}