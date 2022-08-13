import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent  {

  data: any;
  a7a:number = 76;
  factories:any []


  constructor(){
    this.data = {
      labels: [],
      datasets: [
          {
              data: [100, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };
  }


}



