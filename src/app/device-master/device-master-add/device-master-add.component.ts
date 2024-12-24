import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterData } from 'src/app/Models/MasterData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-master-add',
  templateUrl: './device-master-add.component.html',
  styleUrls: ['./device-master-add.component.css']
})
export class DeviceMasterAddComponent {
  
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
    
  }

  constructor(private services:ServicesService, private router: Router){}

  addMasterData(){

    this.services.addMasterData(this.masterData)
     .subscribe({

      next: (routing) => {
        this.router.navigate(['DeviceMaster']);
      }
      
    });
  }
  cancel() {
    this.router.navigate(['DeviceMaster']);
  }

}
