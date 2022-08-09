import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  operationActivated = new BehaviorSubject('function')

  constructor() { }
}
