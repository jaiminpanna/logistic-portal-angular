import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  isLoginPage: boolean = false;
  title: any;
  
  constructor(private router: Router){router.events.subscribe((val) => {
    if (val instanceof NavigationEnd) {
      this.isLoginPage = (val.url == '/Login' || val.url == '/' || val.url == '/Signup');
    }
  });}

  logOut(){
    this.router.navigateByUrl("Login");
  }

}
