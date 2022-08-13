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

  activities:any [] = [
    {
      title:'oee',
      title_value: '70%',
      shape1_value:'60%',
      shape2_value:'76%',
      shape3_value:'95%',
      shape4_value:'45%',
    }
    ,
    {
      title:'MTBF[h]',
      title_value: '55%',
      shape1_value:'45%',
      shape2_value:'68%',
      shape3_value:'40%',
      shape4_value:'73%',
    }
    ,
    {
      title:'UPTIME',
      title_value: '92%',
      shape1_value:'30%',
      shape2_value:'63%',
      shape3_value:'23%',
      shape4_value:'38%',
    }
  ];

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
