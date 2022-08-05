import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dashboard-linechart',
  templateUrl: './dashboard-linechart.component.html',
  styleUrls: ['./dashboard-linechart.component.scss'],
  providers: [MessageService]
})
export class DashboardLinechartComponent implements OnInit {

  lines:number[] = [1,2,3]

  data: any;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: true,
              borderColor: '#4bc0c0',
              backgroundColor:'#FF9F1C33'
          },

      ]
  };

  }

  selectData(event) {
    this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
}

}
