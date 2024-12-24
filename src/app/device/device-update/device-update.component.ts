import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceData } from 'src/app/Models/DeviceData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-update',
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.css']
})
export class DeviceUpdateComponent {

  DeviceId: string | undefined

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
    
    this.route.paramMap.subscribe({

      next: (params) => {
        
        this.DeviceId = this.route.snapshot.params['id'];

        if(this.DeviceId){
        this.services.getDevice(this.DeviceId)
        .subscribe({

          next: (Response) => {
            this.deviceData = Response;
          } 
        });
        }
      }
    })

  }


  updateDeviceData(){

    
    this.services.updateDeviceData(this.deviceData.deviceId, this.deviceData)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['Device']);
      }
    });
 
  }

  deleteDeviceData(deviceId: string){
    this.services.deleteDeviceData(deviceId)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['Device']);
      }
    });  
  }



  constructor(private services: ServicesService, private router: Router, private route: ActivatedRoute){}

}
