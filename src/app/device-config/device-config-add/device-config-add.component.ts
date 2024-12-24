import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSliderChange, MatSliderDragEvent } from '@angular/material/slider';
import { Router } from '@angular/router';
import { ConfigData } from 'src/app/Models/ConfigData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-config-add',
  templateUrl: './device-config-add.component.html',
  styleUrls: ['./device-config-add.component.css']
})
export class DeviceConfigAddComponent implements OnInit {

  isChecked1 = false; isChecked2 = false; isChecked3 = false; isChecked4 = false; isChecked5 = false; isChecked6 = false; isChecked7 = false; 


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


  // battery_lowvalue = 0;
  // battery_highvalue = 100;
  // humidity_lowvalue: number = 0;
  // humidity_highvalue: number = 100;
  // light_lowvalue: number = 0;
  // light_highvalue: number = 100;
  // shock_lowvalue: number = 1125;
  // shock_highvalue: number = 23999;
  // duration_lowvalue: number = 1;
  // duration_highvalue: number = 10;
  // tilt_lowvalue: number = 0;
  // tilt_highvalue: number = 180;
  // pressure_lowvalue: Number = 30000;
  // pressure_highvalue: Number = 130000;
  // temperature_lowvalue: number = -320;
  // temperature_highvalue: number = 175;
 
  // formatLabel(value: number): string {
  //   return `${value}`;
  // }

  // onSliderChange(event: MatSliderDragEvent) {
  //   const value = event.value;
  //   const range = this.battery_highvalue - this.battery_lowvalue;
  //   const lowValue = Math.round(value * (100 - range) / 100);
  //   this.battery_lowvalue = lowValue;
  //   this.battery_highvalue = (lowValue + range);
  // }

  // sliderValue = [0, 100];

  // onSliderChange(event: MatSliderChange) {

  //   const min = event.value[0];
  //   const max = event.value[1];
  //   this.battery_lowvalue = min.toString();
  //   this.battery_highvalue = max.toString();
  //   // this.sliderValue = event.value;
  //   // this.battery_lowvalue = this.sliderValue[0];
  //   // this.battery_highvalue = this.sliderValue[1];
  // }

  // onSliderInput(){
  //   console.log(this.sliderValue);
  // }

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


  constructor(private services:ServicesService, private router: Router,public dialog: MatDialog){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addConfigData(){

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

    this.services.addConfigData(this.configData)
     .subscribe({

      next: (routing) => {

          this.router.navigate(['DeviceConfig']);
        
      }
      
    });
  }

  cancel() {
    this.router.navigate(['DeviceConfig']);
  }

}
