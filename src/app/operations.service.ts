import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  operationActivated = new BehaviorSubject('function')

  all_factories:any [] = [

    {
      name:'Smart',
      speed: '3,000' ,
      production:'10,000' ,
      time:'20',
      lines:'5:2',
      volume:'500',
      quality:'5000',
      oee:'76',
      sle:'84',
      usle:'60'
    }
    ,
    {
      name:'LG',
      speed: '5,000' ,
      production:'20,000' ,
      time:'30',
      lines:'5:2',
      volume:'700',
      quality:'8000',
      oee:'67',
      sle:'48',
      usle:'70'
    }
    ,
    {
      name:'Dell',
      speed: '7,000' ,
      production:'40,000' ,
      time:'70',
      lines:'5:2',
      volume:'600',
      quality:'10000',
      oee:'50',
      sle:'61',
      usle:'74'
    }
    ,
    {
      name:'Lenovo',
      speed: '9,000' ,
      production:'25,000' ,
      time:'40',
      lines:'5:2',
      volume:'750',
      quality:'4000',
      oee:'44',
      sle:'49',
      usle:'93'
    }
    ,
    {
      name:'Smart',
      speed: '3,000' ,
      production:'10,000' ,
      time:'20',
      lines:'5:2',
      volume:'500',
      quality:'5000',
      oee:'76',
      sle:'84',
      usle:'60'
    }
    ,
    {
      name:'LG',
      speed: '5,000' ,
      production:'20,000' ,
      time:'30',
      lines:'5:2',
      volume:'700',
      quality:'8000',
      oee:'67',
      sle:'48',
      usle:'70'
    }
    ,
    {
      name:'Dell',
      speed: '7,000' ,
      production:'40,000' ,
      time:'70',
      lines:'5:2',
      volume:'600',
      quality:'10000',
      oee:'50',
      sle:'61',
      usle:'74'
    }
    ,
    {
      name:'Lenovo',
      speed: '9,000' ,
      production:'25,000' ,
      time:'40',
      lines:'5:2',
      volume:'750',
      quality:'4000',
      oee:'44',
      sle:'49',
      usle:'93'
    }

  ]

  constructor() { }
}
