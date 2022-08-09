import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/operations.service';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor(private _OperationsService:OperationsService) {}

  RouteNum:string = 'first';
  operationActivated:string = ''
  allFunctions:number [] = [1,1,1,1,1,1,1,1,1,1,1,1]
  showMaterial:boolean = false
  showQuantity:boolean = false
  MachineBoxs:number [] = [1,1,1,1]
  ResourcesInputs:number [] = [1]


  ngOnInit(): void {
    this._OperationsService.operationActivated.subscribe((data)=>{
      this.operationActivated = data
    })
  }

  RouteNumBtn(num:string):void{
    this.RouteNum = num
  }

  MaterialBtn():void{
    this.showMaterial = !this.showMaterial
  }

  QuantityBtn():void{
    this.showQuantity = !this.showQuantity
  }

  addMaterial(){
    this.ResourcesInputs.push(1)
  }

}
