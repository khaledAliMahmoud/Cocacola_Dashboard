import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  productionBtn:string = 'Production';
  factories:any [] = [

    {
      name:'Smart',
      speed: '3,000' ,
      production:'10,000' ,
      time:'20',
      lines:'5:2',
      volume:'500',
      quality:'5000'
    }
    ,
    {
      name:'LG',
      speed: '5,000' ,
      production:'20,000' ,
      time:'30',
      lines:'5:2',
      volume:'700',
      quality:'8000'
    }
    ,
    {
      name:'Dell',
      speed: '7,000' ,
      production:'40,000' ,
      time:'70',
      lines:'5:2',
      volume:'600',
      quality:'10000'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  activeBtn(info:string):void{

   this.productionBtn = info

  }

}
