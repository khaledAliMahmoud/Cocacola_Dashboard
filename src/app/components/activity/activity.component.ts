import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  providers: [MessageService]

})
export class ActivityComponent implements OnInit {

  activeCahrts:string = 'progress';
  activeLink:string = 'OEE'
  data1: any;
  data2: any;
  data3: any;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.data1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: '',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: true,
              borderColor: '#4bc0c0',
              backgroundColor:'transparent'
          },

      ]
  };

  this.data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: '',
            data: [50, 40, 60, 49, 72, 28, 42],
            fill: true,
            borderColor: '#4bc0c0',
            backgroundColor:'transparent'
        },

    ]
};

this.data3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: '',
          data: [59, 80, 81, 56, 45, 30, 77],
          fill: true,
          borderColor: '#4bc0c0',
          backgroundColor:'transparent'
      },

  ]
};

  }

  showBtn(info:string):void{
    this.activeCahrts = info
  }

  linkBtn(info:string):void{
    this.activeLink = info
  }

  selectData(event) {
    this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data1.datasets[event.element._datasetIndex].data[event.element._index]});
}

}
