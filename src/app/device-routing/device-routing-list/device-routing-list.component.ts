import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RoutingData } from 'src/app/Models/RoutingData.model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-device-routing-list',
  templateUrl: './device-routing-list.component.html',
  styleUrls: ['./device-routing-list.component.css']
})
export class DeviceRoutingListComponent {

  searchTerm: string = '';
  searchErrMsg = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ServicesService, private router:Router){}

  routingData: RoutingData [] = [];

  datasource = new MatTableDataSource<RoutingData>();
  displayedColumns = ["airline","deviceModel","validFrom","validTo"];

  ngOnInit(): void {  
    this.getRoutingData();
  }
 
  addRoutingData(){
    this.router.navigateByUrl("DeviceRouting/Add");
  }

  // Main Functions ---------------------------------


  getRoutingData(){  
    this.service.getRoutingData()
      .subscribe(
        (response: any) => { 
         
          for (let i = 0; i < response.length; i++) {
            this.routingData.push({

              "airline" : response[i].airline,
              "deviceModel" : response[i].deviceModel,
              "validFrom" : response[i].validFrom,
              "validTo" : response[i].validTo
            
            });
          }
    
          this.datasource = new MatTableDataSource<any>(this.routingData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.routingData=[];
        },
        (error) => {
          console.log('Error:', error);
        }
        
      );     
  }


  search() {
    this.service.searchRouting(this.searchTerm).subscribe((response: any) => {  

      if(response == '')
      {
        this.searchErrMsg = "No results found for " + "'"+ this.searchTerm + "'" ;
      }
        
      for (let i = 0; i < response.length; i++) {
        this.routingData.push({

          "airline" : response[i].airline,
          "deviceModel" : response[i].deviceModel,
          "validFrom" : response[i].validFrom,
          "validTo" : response[i].validTo
        
        });
      }

          this.datasource = new MatTableDataSource<any>(this.routingData);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          this.routingData=[];
  
      },
      (error) => {
        console.log('Error:', error);
      });
    
  }
  reset(){
    this.searchErrMsg = '';
    this.searchTerm='';
    this.getRoutingData();
  }
 

  
}
