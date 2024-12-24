import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RoutingData } from '../Models/RoutingData.model';
import { MasterData } from '../Models/MasterData.model';
import { DeviceData } from '../Models/DeviceData.model';
import { ConfigData } from '../Models/ConfigData.model';
import { LoginUser } from '../Models/RegisterUser.model';
import { SignupUser } from '../Models/SignupUser.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private configUrl:string = "https://localhost:7260/api/DeviceConfig/";
  private routingUrl:string = "https://localhost:7260/api/DeviceRouting/";
  private masterUrl:string = "https://localhost:7260/api/DeviceMaster/";
  private deviceUrl:string = "https://localhost:7260/api/GPSDevice/";
  private registerUrl:string = "https://localhost:7260/api/RegisterUser/";

  constructor(private http: HttpClient) { }


  // Get All data in list to display in home page.

  getConfigData():Observable<any>{
    return this.http.get<any>(`${this.configUrl}GetDeviceConfigList`);
  }

  getRoutingData():Observable<any>{
    return this.http.get<any>(`${this.routingUrl}GetDeviceRoutingList`);
  }

  getMasterData():Observable<any>{
    return this.http.get<any>(`${this.masterUrl}GetDeviceMasterList`);
  }

  getDeviceData():Observable<any>{
    return this.http.get<any>(`${this.deviceUrl}GetGPSDeviceList`);
  }





  // Get Particular model data by their primary key.

  getConfig(configurationName: string):Observable<any>{
    return this.http.get<any>(`${this.configUrl}` + configurationName);
  }

  getRouting(airline: string):Observable<any>{
    return this.http.get<any>(`${this.routingUrl}GetDeviceRouting/` + airline);
  }

  getMaster(deviceId: string):Observable<any>{
    return this.http.get<any>(`${this.masterUrl}GetDeviceMaster/` + deviceId);
  }

  getDevice(deviceId: string):Observable<any>{
    return this.http.get<any>(`${this.deviceUrl}` + deviceId);
  }






  // Add Particular model in database

  addConfigData(configData: ConfigData):Observable<any>{
    return this.http.post<ConfigData>(`${this.configUrl}PostDeviceConfig`, configData);
  }

  addRoutingData(routingData: RoutingData):Observable<any>{
    return this.http.post<RoutingData>(`${this.routingUrl}PostDeviceRouting`, routingData);
  }

  addMasterData(masterData: MasterData):Observable<any>{
    return this.http.post<MasterData>(`${this.masterUrl}PostDeviceMaster`, masterData);
  }

  addDeviceData(deviceData: DeviceData):Observable<any>{
    return this.http.post<DeviceData>(`${this.deviceUrl}PostGPSDevice`, deviceData);
  }




  // Delete Particular model in database by Primary Key.

  deleteConfigData(configurationName: string):Observable<string>{
    return this.http.delete<string>(`${this.configUrl}` + configurationName);
  }

  deleteRoutingData(airline: string):Observable<string>{
    return this.http.delete<string>(`${this.routingUrl}` + airline);
  }

  deleteMasterData(deviceId: string):Observable<string>{
    return this.http.delete<string>(`${this.masterUrl}` + deviceId);
  }

  deleteDeviceData(deviceId: string):Observable<string>{
    return this.http.delete<string>(`${this.deviceUrl}` + deviceId);
  }



  // Delete Particular model in database by Primary Key.

  updateConfigData(configurationName: string, configData: ConfigData): Observable<ConfigData>{
    return this.http.put<ConfigData>(`${this.configUrl}`, configData);
  }

  updateRoutingData(airline: string, routingData: RoutingData): Observable<RoutingData>{
    return this.http.put<RoutingData>(`${this.routingUrl}`, routingData);
  }

  updateMasterData(deviceId: string, masterData: MasterData): Observable<MasterData>{
    return this.http.put<MasterData>(`${this.masterUrl}`, masterData);
  }

  updateDeviceData(deviceId: string, deviceData: DeviceData): Observable<DeviceData>{
    return this.http.put<DeviceData>(`${this.deviceUrl}`, deviceData);
  }


  // Search Particular List by Entering Search Term

  searchConfig(searchTerm: string):Observable<any>{
    return this.http.get<any>(`${this.configUrl}SearchConfig/` + searchTerm);
  }

  searchRouting(searchTerm: string):Observable<any>{
    return this.http.get<any>(`${this.routingUrl}SearchRouting/` + searchTerm);
  }

  searchMaster(searchTerm: string):Observable<any>{
    return this.http.get<any>(`${this.masterUrl}SearchMaster/` + searchTerm);
  }

  searchDevice(searchTerm: string):Observable<any>{
    return this.http.get<any>(`${this.deviceUrl}SearchDevice/` + searchTerm);
  }

 
  // Register and login to access portal
  
  checkUserData(userData: LoginUser): Observable<string>{
    return this.http.post<string>(`${this.registerUrl}CheckUser`, userData, {responseType: 'text' as 'json'});
  }

  registerUser(userData: SignupUser):Observable<any>{
    return this.http.post<SignupUser>(`${this.registerUrl}AddUser`, userData);
  }


  
  // Search bar where getting data by device type

  getSendumConfigData():Observable<any>{
    return this.http.get<any>('https://localhost:7260/api/DeviceConfig/GetDevice/sendum%20device');
  }

  getTiveConfigData():Observable<any>{
    return this.http.get<any>('https://localhost:7260/api/DeviceConfig/GetDevice/tive%20device');
  }

  getSendumMasterData():Observable<any>{
    return this.http.get<any>('https://localhost:7260/api/DeviceMaster/GetDeviceMasterType/sendum%20device');
  }

  getTiveMasterData():Observable<any>{
    return this.http.get<any>('https://localhost:7260/api/DeviceMaster/GetDeviceMasterType/tive%20device');
  }



  

  // getUserData(id: number):Observable<addUser>{
  //   return this.http.get<addUser>(`${this.baseUrl}` + id);
  // }

  // checkUserData(userData: User): Observable<string>{
  //   return this.http.post<string>(`${this.baseUrl}check`, userData, {responseType: 'text' as 'json'});
  // }

  // addUserData(userData: User): Observable<User>{
  //   return this.http.post<User>(`${this.baseUrl}`, userData);
  // }

  // deleteUserData(id: number): Observable<User>{
  //   return this.http.delete<User>(`${this.baseUrl}` + id);
  // }

  // updateUserData(id: number, userData: User): Observable<User>{
  //   return this.http.put<User>(`${this.baseUrl}`, userData);
  // }
}
