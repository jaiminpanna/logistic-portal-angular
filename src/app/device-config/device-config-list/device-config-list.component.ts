import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfigData } from 'src/app/Models/ConfigData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-config-list',
  templateUrl: './device-config-list.component.html',
  styleUrls: ['./device-config-list.component.css']
})
export class DeviceConfigListComponent {

  searchTerm: string = '';
  searchErrMsg = '';

  sendumDevice: string = "Sendum Device";
  tiveDevice: string = "Tive Device";

  constructor(private service: ServicesService,private router: Router){}

  search_drop = "[Select]";
  search_text = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  configData: ConfigData [] = [];

  datasource = new MatTableDataSource<ConfigData>();
  displayedColumns = ["configurationName", "deviceType", "validFrom", "validTo"];

  ngOnInit(): void {  
    this.getConfigData();
  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.datasource.filter = filterValue;
  }

  searchDevice(){

    if (this.search_drop == "[Select]"){

      this.search_text = "";
      this.getConfigData();
    }
    
   if(this.search_drop == "Sendum Device"){

      this.search_text = "Search results are now filtered: " + this.search_drop;
      this.getSendumConfigData();
  }

  if(this.search_drop == "Tive Device"){

      this.search_text = "Search results are now filtered: " + this.search_drop;
      this.getTiveConfigData();
  }

}

  addConfigData(){
    this.router.navigateByUrl("DeviceConfig/Add");
  }


  // main functions



  
  getConfigData(){  
    this.service.getConfigData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.configData.push({
              "configurationName": response[i].configurationName,
              "deviceType": response[i].deviceType,
              "validFrom": response[i].validFrom,
              "validTo": response[i].validTo,
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
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.configData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.configData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }

  getSendumConfigData(){  
    this.service.getSendumConfigData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.configData.push({
              "configurationName": response[i].configurationName,
              "deviceType": response[i].deviceType,
              "validFrom": response[i].validFrom,
              "validTo": response[i].validTo,
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
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.configData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.configData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }

  getTiveConfigData(){  
    this.service.getTiveConfigData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.configData.push({
              "configurationName": response[i].configurationName,
              "deviceType": response[i].deviceType,
              "validFrom": response[i].validFrom,
              "validTo": response[i].validTo,
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
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.configData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.configData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }


  search() {
    this.service.searchConfig(this.searchTerm).subscribe((response: any) => {  

      if(response == '')
      {
        this.searchErrMsg = "No results found for " + "'"+ this.searchTerm + "'" ;
      }
        
      for (let i = 0; i < response.length; i++) {
        this.configData.push({
          "configurationName": response[i].configurationName,
          "deviceType": response[i].deviceType,
          "validFrom": response[i].validFrom,
          "validTo": response[i].validTo,
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
        });
      }
          this.datasource = new MatTableDataSource<any>(this.configData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.configData=[];
  
      },
      (error) => {
        console.log('Error:', error);
      });
    
  }
  reset(){
    this.searchErrMsg = '';
    this.searchTerm='';
    this.getConfigData();
  }


}
