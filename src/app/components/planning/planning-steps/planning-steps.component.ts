import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationsService } from 'src/app/operations.service';


@Component({
  selector: 'app-planning-steps',
  templateUrl: './planning-steps.component.html',
  styleUrls: ['./planning-steps.component.scss']
})
export class PlanningStepsComponent implements OnInit {

  operationActivated:string = ''
  time_clicked:boolean = true
  machine_clicked:boolean = true
  resource_clicked:boolean = true

  constructor(private _OperationsService:OperationsService) { }

  ngOnInit(): void {
    this._OperationsService.operationActivated.subscribe((data)=>{
      this.operationActivated = data
    })
  }

  OperationBtn(num:string){
    this._OperationsService.operationActivated.next(num)

  }

  TimeBtn(){
    this.time_clicked = false
  }

  machineBtn(){
    this.machine_clicked = false
  }

  resourceBtn(){
    this.resource_clicked = false
  }

}
