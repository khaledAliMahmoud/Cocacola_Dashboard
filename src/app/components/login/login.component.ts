import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedOutService } from 'src/app/logged-out.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  disableLogin:boolean = true

  loginForm:FormGroup = new FormGroup({
    userMail:new FormControl(null , [Validators.required, Validators.email ]),
    password:new FormControl(null , [Validators.required])
  })


  constructor(private _Router:Router , private _LoggedOutService:LoggedOutService) { }

  ngOnInit(): void {
  }

  loginBtn(data:FormGroup){
    localStorage.setItem('userdata' , JSON.stringify(data.value));
    this._LoggedOutService.loggedIn.next(localStorage.getItem('userdata'))
    console.log(this._LoggedOutService.loggedIn.getValue());

    this._Router.navigate(['/dashboard'])
  }

}
