import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingData } from 'src/app/Models/RoutingData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-routing-add',
  templateUrl: './device-routing-add.component.html',
  styleUrls: ['./device-routing-add.component.css']
})
export class DeviceRoutingAddComponent {
  
  routingData: RoutingData = {

    airline: '',
    deviceModel: '',
    validFrom: '',
    validTo: ''
  
  };

  ngOnInit(): void {
    
  }

  constructor(private services:ServicesService, private router: Router){}

  addRoutingData(){

    this.services.addRoutingData(this.routingData)
     .subscribe({

      next: (routing) => {
        this.router.navigate(['DeviceRouting']);
      }
      
    });
  }

  cancel() {
    this.router.navigate(['DeviceRouting']);
  }

  
}
