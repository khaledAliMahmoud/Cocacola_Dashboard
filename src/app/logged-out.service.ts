import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutService {

  constructor() {
    if(localStorage.getItem('userdata') != null){
      this.loggedIn.next(localStorage.getItem('userdata'))
    }else{
      this.loggedIn.next(null)
    }
  }

  logOut = new BehaviorSubject(false)
  loggedIn = new BehaviorSubject(null)

}
