import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  productionBtn:string = 'Production';
  factories:number [] = [1,2,3,4,5,6,7,8]

  constructor() { }

  ngOnInit(): void {
  }

  activeBtn(info:string):void{

   this.productionBtn = info

  }

}
