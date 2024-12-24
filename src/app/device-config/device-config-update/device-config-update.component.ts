import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigData } from 'src/app/Models/ConfigData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-config-update',
  templateUrl: './device-config-update.component.html',
  styleUrls: ['./device-config-update.component.css']
})
export class DeviceConfigUpdateComponent {

  isChecked1 = false; isChecked2 = false; isChecked3 = false; isChecked4 = false; isChecked5 = false; isChecked6 = false; isChecked7 = false; 

  // // alert delete dialogue box
  // openDialog(): void {
  //   this.dialog.open(DialogAnimationsExampleDialog, {
  //     width: '300px'
  //   });
  // }


  options: Options = {
    floor: 0,
    ceil: 100
  };
  options1: Options = {
    floor: 0,
    ceil: 100
  };
  options2: Options = {
    floor: 0,
    ceil: 100
  };
  options3: Options = {
    floor: 1125,
    ceil: 23999
  };
  options4: Options = {
    floor: 1,
    ceil: 10
  };
  options5: Options = {
    floor: 0,
    ceil: 180
  };
  options6: Options = {
    floor: 30000,
    ceil: 130000
  };
  options7: Options = {
    floor: -320,
    ceil: 175
  };


  ConfigurationName: string | undefined

  configData: ConfigData = {

    configurationName: '',
    deviceType: '',
    validFrom: '',
    validTo: '',
    temperatureProb: '',
    batteryStatus: '',
    batteryMinRange: 0,
    batteryMaxRange: 0,
    humidityStatus: '',
    humidityMinRange: 0,
    humidityMaxRange: 0,
    lightStatus: '',
    lightMinRange: 0,
    lightMaxRange: 0,
    shockStatus: '',
    shockRange: 0,
    shockDuration: 0,
    tiltStatus: '',
    tiltMinRange: 0,
    tiltMaxRange: 0,
    pressureStatus: '',
    pressureMinRange: 0,
    pressureMaxRange: 0,
    temperatureStatus: '',
    temperatureMinRange: 0,
    temperatureMaxRange: 0
  
  };

  ngOnInit(): void {
    
    this.route.paramMap.subscribe({

      next: (params) => {
        
        this.ConfigurationName = this.route.snapshot.params['id'];

        if(this.ConfigurationName){
        this.services.getConfig(this.ConfigurationName)
        .subscribe({

          next: (Response) => {
            this.configData = Response;

                         if(Response.batteryStatus == "Enable")
                         this.isChecked1 = true;
                         if(Response.humidityStatus == "Enable")
                         this.isChecked2 = true;
                         if(Response.lightStatus == "Enable")
                         this.isChecked3 = true;
                         if(Response.shockStatus == "Enable")
                         this.isChecked4 = true;
                         if(Response.tiltStatus == "Enable")
                         this.isChecked5 = true;
                         if(Response.pressureStatus == "Enable")
                         this.isChecked6 = true; 
                         if(Response.temperatureStatus == "Enable")
                         this.isChecked7 = true;             
          } 
        });
        }
      }
    })

  }

  updateConfigData(){

    if(this.isChecked1 == true)
    this.configData.batteryStatus = "Enable"; else this.configData.batteryStatus = "Disable";
    if(this.isChecked2 == true)
    this.configData.humidityStatus = "Enable"; else this.configData.humidityStatus = "Disable";
    if(this.isChecked3 == true)
    this.configData.lightStatus = "Enable"; else  this.configData.lightStatus = "Disable";
    if(this.isChecked4 == true)
    this.configData.shockStatus = "Enable"; else this.configData.shockStatus = "Disable";
    if(this.isChecked5 == true)
    this.configData.tiltStatus = "Enable"; else  this.configData.tiltStatus = "Disable";
    if(this.isChecked6 == true)
    this.configData.pressureStatus = "Enable"; else this.configData.pressureStatus = "Disable";
    if(this.isChecked7 == true)
    this.configData.temperatureStatus = "Enable"; else this.configData.temperatureStatus = "Disable";

    this.services.updateConfigData(this.configData.configurationName, this.configData)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['DeviceConfig']);
      }
    });


  }

  deleteConfigData(configurationName: string){
    this.services.deleteConfigData(configurationName)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['DeviceConfig']);
      }
    });

  }



  constructor(private services: ServicesService, private router: Router, private route: ActivatedRoute, public dialog:MatDialog){}

}

//   // alert delete dialogue box implmentation
// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private services: ServicesService, private router: Router) {}

  // deleteConfigData(configurationName: string){
  //   this.services.deleteConfigData(configurationName)
  //   .subscribe({
  //     next: (Response) => {
  //       this.router.navigate(['DeviceConfig']);
  //     }
  //   });

  // }

// }
