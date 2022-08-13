import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedOutService } from './logged-out.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  logOut:boolean;

  constructor(private _LoggedOutService:LoggedOutService , private _Router:Router){

    this._LoggedOutService.loggedIn.subscribe((res)=>{
      console.log(res);
      if(res != null ){

        this.logOut = false

      }else if(res == null){
        
        this.logOut = true
      }
    })

  }
  title = 'Cocacola';
}
