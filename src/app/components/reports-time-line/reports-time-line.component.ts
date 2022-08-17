import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-time-line',
  templateUrl: './reports-time-line.component.html',
  styleUrls: ['./reports-time-line.component.scss']
})
export class ReportsTimeLineComponent implements OnInit {

  lines:number[] = [1]

  constructor() { }

  ngOnInit(): void {
  }

}
