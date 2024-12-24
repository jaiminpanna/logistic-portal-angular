import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeviceData } from 'src/app/Models/DeviceData.model';
import { ServicesService } from 'src/app/Services/services.service';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {

  searchTerm: string = '';
  searchErrMsg = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ServicesService, private router:Router){}

  deviceData: DeviceData [] = [];

  datasource = new MatTableDataSource<DeviceData>();
  displayedColumns = ["deviceId", "equipmentType", "accountId", "accountName","courierId","contactEmail","description","status"];

  ngOnInit(): void {  
    this.getDeviceData();
  }

  addDeviceData(){
    this.router.navigateByUrl("Device/Add");
  }

  // Main Functions ---------------------------------


  getDeviceData(){  
    this.service.getDeviceData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.deviceData.push({
              "deviceId" : response[i].deviceId,
              "equipmentType" : response[i].equipmentType, 
              "accountId" : response[i].accountId, 
              "accountName" : response[i].accountName,
              "courierId" : response[i].courierId,
              "contactEmail" : response[i].contactEmail,
              "description" : response[i].description,
              "status" : response[i].status
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.deviceData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.deviceData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }


  search() {
    this.service.searchDevice(this.searchTerm).subscribe((response: any) => {  

      if(response == '')
      {
        this.searchErrMsg = "No results found for " + "'"+ this.searchTerm + "'" ;
      }
        
      for (let i = 0; i < response.length; i++) {
        this.deviceData.push({
          "deviceId" : response[i].deviceId,
          "equipmentType" : response[i].equipmentType, 
          "accountId" : response[i].accountId, 
          "accountName" : response[i].accountName,
          "courierId" : response[i].courierId,
          "contactEmail" : response[i].contactEmail,
          "description" : response[i].description,
          "status" : response[i].status
        });
      }
          this.datasource = new MatTableDataSource<any>(this.deviceData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.deviceData=[];
  
      },
      (error) => {
        console.log('Error:', error);
      });
    
  }
  reset(){
    this.searchErrMsg='';
    this.searchTerm='';
    this.getDeviceData();
  }


  // public getServerData(event?:PageEvent){
  //   this.service.getDeviceData()
    
  //     .subscribe((response) => {
  //         this.datasource = response.deviceData;
  //         this.paginator = response.paginator;
  //         this.pageIndex = response.pageIndex;
  //         this.pageSize = response.pageSize;
  //         this.length = response.length;
  //     });
  //   return event;
  // }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // pageSize = 5;
  // pageSizeOptions = [5, 10, 25, 50];

  // ngAfterViewInit() {
  //   this.paginator.page.subscribe((event: PageEvent) => {
  //     this.currentPageIndex = event.pageIndex;
  //     this.getDeviceData(); 
  //   });
  // }

}
