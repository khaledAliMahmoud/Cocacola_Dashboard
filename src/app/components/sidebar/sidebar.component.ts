import { Component, OnInit } from '@angular/core';
import { LoggedOutService } from 'src/app/logged-out.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _LoggedOutService:LoggedOutService) { }

  ngOnInit(): void {
  }

  islogged_out(){
    // this._LoggedOutService.logOut.next(true);
    localStorage.removeItem('userdata');
    this._LoggedOutService.loggedIn.next(null)
  }

}
