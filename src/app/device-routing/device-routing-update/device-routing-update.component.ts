import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoutingData } from 'src/app/Models/RoutingData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-routing-update',
  templateUrl: './device-routing-update.component.html',
  styleUrls: ['./device-routing-update.component.css']
})
export class DeviceRoutingUpdateComponent {

  Airline: string | undefined
  data: any | undefined

  routingData: RoutingData = {

    airline: '',
    deviceModel: '',
    validFrom: '',
    validTo: ''
  
  };

  ngOnInit(): void {
    
    this.route.paramMap.subscribe({

      next: (params) => {
        
        this.Airline = this.route.snapshot.params['id'];

        if(this.Airline){
        this.services.getRouting(this.Airline)
        .subscribe({

          next: (Response) => {
            this.routingData = Response;
          } 
        });
        }
      }
    })

  }

  updateConfigData(){

    this.services.updateRoutingData(this.routingData.airline, this.routingData)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['DeviceRouting']);
      },
    //   error(err) {
    //     this.data = err;
    //  }  
    });


  }

  deleteRoutingData(airline: string){
    this.services.deleteRoutingData(airline)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['DeviceRouting']);
      }
    });

  }

  constructor(private services: ServicesService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal){}


}
