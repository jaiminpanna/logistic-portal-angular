import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceData } from 'src/app/Models/DeviceData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent {

  required_pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  validEmail: string;

  deviceData: DeviceData = {

    deviceId: '',
    equipmentType: '',
    accountId: 0,
    accountName: '',
    courierId: 0,
    contactEmail: '',
    description: '',
    status: ''
  
  };


  ngOnInit(): void {
    
  }

  constructor(private services:ServicesService, private router: Router){}

  addDeviceData(){

    this.services.addDeviceData(this.deviceData)
     .subscribe({

      next: (routing) => {
        this.router.navigate(['Device']);
      }
      
    });
  }
  cancel() {
    this.router.navigate(['Device']);
  }

}
