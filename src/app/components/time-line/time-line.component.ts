import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  lines:number[] = [1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

}
