import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { SignupUser } from '../Models/SignupUser.model';

@Component({
  selector: 'app-device-signup',
  templateUrl: './device-signup.component.html',
  styleUrls: ['./device-signup.component.css']
})
export class DeviceSignupComponent {

 userData: SignupUser = {


 name: '',
 email: '',
 userName: '',
 password: '',
 confirmPassword: ''


};



 data: string | undefined;



 name: string | undefined;

 email: string | undefined;

 username: string | undefined;

 password: string | undefined;




 registerUser(){


 console.log(this.userData);

 this.services.registerUser(this.userData)

 .subscribe({

next: () => {

  this.router.navigate(['Device']); 

 }

 });

 }

 login(){
 
  this.router.navigate(['Login']);
  
 }

 





 constructor(private services: ServicesService, private router: Router){}





}


