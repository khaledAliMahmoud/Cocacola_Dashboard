import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-boxes',
  templateUrl: './planning-boxes.component.html',
  styleUrls: ['./planning-boxes.component.scss']
})
export class PlanningBoxesComponent implements OnInit {

  data: any;

  constructor() {
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



  ngOnInit(): void {
  }

}
