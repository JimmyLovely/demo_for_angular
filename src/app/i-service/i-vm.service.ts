import { Injectable } from '@angular/core';

// Model
import { Vm } from '../model/vm';

export abstract class IVmService {
  abstract getAll(): Vm[];
  abstract getFirst(): Vm;
}