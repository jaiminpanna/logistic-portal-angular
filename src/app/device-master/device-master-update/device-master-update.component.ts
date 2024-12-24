import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterData } from 'src/app/Models/MasterData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-master-update',
  templateUrl: './device-master-update.component.html',
  styleUrls: ['./device-master-update.component.css']
})
export class DeviceMasterUpdateComponent {

  DeviceId: string | undefined

  masterData: MasterData = {

    deviceId: '',
    deviceName: '',
    deviceType: '',
    status: '',
    ownership: '',
    validFrom: '',
    validTo: '',
    market: ''
}
  
  ngOnInit(): void {
    
    this.route.paramMap.subscribe({

      next: (params) => {
        
        this.DeviceId = this.route.snapshot.params['id'];

        if(this.DeviceId){
        this.services.getMaster(this.DeviceId)
        .subscribe({

          next: (Response) => {
            this.masterData = Response;
          } 
        });
        }
      }
    })

  }

  updateMasterData(){

    this.services.updateMasterData(this.masterData.deviceId, this.masterData)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['DeviceMaster']);
      }
    });


  }

  deleteMasterData(deviceId: string){
    this.services.deleteMasterData(deviceId)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['DeviceMaster']);
      }
    });

  }

  constructor(private services: ServicesService, private router: Router, private route: ActivatedRoute){}


};
