import { Injectable } from '@angular/core';

// Service
import { IVmService } from '../i-service/i-vm.service';
import { Vm } from '../model/vm';

@Injectable({
  providedIn: 'root'
})
export class VmService implements IVmService{

  private vms: Vm[] = [
    {
      ip: '192.168.1.1',
      name: 'CN0001'
    },
    {
      ip: '192.168.1.2',
      name: 'CN0002'
    },
    {
      ip: '192.168.1.3',
      name: 'CN0003'
    },
    {
      ip: '192.168.1.4',
      name: 'CN0004'
    },
    {
      ip: '192.168.1.5',
      name: 'CN0005'
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