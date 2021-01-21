import { Injectable } from '@angular/core';

// Model
import { Vm } from "../model/vm";

@Injectable({
  providedIn: 'root'
})
export abstract class IVmService {

  constructor() { }

  abstract getAll(): Vm[];
  abstract getFirst(): Vm;
}