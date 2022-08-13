import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/operations.service';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  productionBtn:string = 'Production';
  factories:any []
  constructor(private _OperationsService:OperationsService) {
    this.factories = this._OperationsService.all_factories
  }

  ngOnInit(): void {
  }

  activeBtn(info:string):void{

   this.productionBtn = info

  }

}
