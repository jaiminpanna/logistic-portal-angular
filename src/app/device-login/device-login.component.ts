import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginUser } from '../Models/RegisterUser.model';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-login',
  templateUrl: './device-login.component.html',
  styleUrls: ['./device-login.component.css']
})
export class DeviceLoginComponent {


  userData: LoginUser = {

    userName: '',
    password: ''
  
  };
  
    data: string | undefined;
  
    username: string | undefined;
    password: string | undefined;

    checkUser(){
  
        console.log(this.userData);
        this.services.checkUserData(this.userData)
        .subscribe({
  
          next: (response:string) => {
  
            if(response == "True"){


                this.router.navigate(['Device']);
          
              
              // this.data = "Data Is Valid";
  
            }
            else{
              this.data = "Please Enter Valid UserName And Password";
            }
          }
  
        });

      }

      signup(){
        this.router.navigate(['Signup'])
      }


    constructor(private services: ServicesService, private router: Router){}


}
