import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfigData } from 'src/app/Models/ConfigData.model';
import {  MasterData } from 'src/app/Models/MasterData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-master-list',
  templateUrl: './device-master-list.component.html',
  styleUrls: ['./device-master-list.component.css']
})
export class DeviceMasterListComponent {

  searchTerm: string = '';
  searchErrMsg = '';

  sendumDevice: string = "Sendum Device";
  tiveDevice: string = "Tive Device";

  search_drop = "[Select]";
  search_text = "";
  
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ServicesService, private router:Router){}

  masterData: MasterData [] = [];

  datasource = new MatTableDataSource<MasterData>();
  displayedColumns = ["deviceId", "deviceName", "deviceType", "status","ownership","validFrom","validTo","market"];

  ngOnInit(): void {  
    this.getMasterData();
  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.datasource.filter = filterValue;
  }

  searchDevice(){

    if (this.search_drop == "[Select]"){

      this.search_text = "";
      this.getMasterData();
    }
    
   if(this.search_drop == "Sendum Device"){

      this.search_text = "Search results are now filtered: " + this.search_drop;
      this.getSendumMasterData();
  }

  if(this.search_drop == "Tive Device"){

      this.search_text = "Search results are now filtered: " + this.search_drop;
      this.getTiveMasterData();
  }

}

  addMasterData(){
    this.router.navigateByUrl("DeviceMaster/Add");
  }

  // Main Functions ---------------------------------



  getMasterData(){  
    this.service.getMasterData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.masterData.push({
              "deviceId": response[i].deviceId,
              "deviceName": response[i].deviceName,
              "deviceType": response[i].deviceType,
              "status": response[i].status,
              "ownership": response[i].ownership,
              "validFrom": response[i].validFrom,
              "validTo" : response[i].validTo,
              "market": response[i].market
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.masterData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.masterData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }

  getSendumMasterData(){  
    this.service.getSendumMasterData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.masterData.push({
              "deviceId": response[i].deviceId,
              "deviceName": response[i].deviceName,
              "deviceType": response[i].deviceType,
              "status": response[i].status,
              "ownership": response[i].ownership,
              "validFrom": response[i].validFrom,
              "validTo" : response[i].validTo,
              "market": response[i].market
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.masterData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.masterData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }

  getTiveMasterData(){  
    this.service.getTiveMasterData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.masterData.push({
              "deviceId": response[i].deviceId,
              "deviceName": response[i].deviceName,
              "deviceType": response[i].deviceType,
              "status": response[i].status,
              "ownership": response[i].ownership,
              "validFrom": response[i].validFrom,
              "validTo" : response[i].validTo,
              "market": response[i].market
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.masterData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.masterData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }

  search() {
    this.service.searchMaster(this.searchTerm).subscribe((response: any) => {  

      if(response == '')
      {
        this.searchErrMsg = "No results found for " + "'"+ this.searchTerm + "'" ;
      }
        
      for (let i = 0; i < response.length; i++) {
        this.masterData.push({
          "deviceId": response[i].deviceId,
          "deviceName": response[i].deviceName,
          "deviceType": response[i].deviceType,
          "status": response[i].status,
          "ownership": response[i].ownership,
          "validFrom": response[i].validFrom,
          "validTo" : response[i].validTo,
          "market": response[i].market
        });
      }
          this.datasource = new MatTableDataSource<any>(this.masterData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.masterData=[];
  
      },
      (error) => {
        console.log('Error:', error);
      });
    
  }
  reset(){
    this.searchErrMsg = '';
    this.searchTerm='';
    this.getMasterData();
  }


}
