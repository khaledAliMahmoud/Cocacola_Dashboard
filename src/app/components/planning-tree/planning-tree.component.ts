import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-tree',
  templateUrl: './planning-tree.component.html',
  styleUrls: ['./planning-tree.component.scss']
})
export class PlanningTreeComponent implements OnInit {

  trees:any [] = [
    {
      off:'25%',
      on:'75%',
      quality:'45%',
      Speed:'20%',
      Break_down:'5%',
      process:'1%',
      time:'2%',
      Idle:'2%',
      stops:'5%'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
