import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceConfigAddComponent } from './device-config/device-config-add/device-config-add.component';
import { DeviceMasterListComponent } from './device-master/device-master-list/device-master-list.component';
import { DeviceRoutingListComponent } from './device-routing/device-routing-list/device-routing-list.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceConfigUpdateComponent } from './device-config/device-config-update/device-config-update.component';
import { DeviceRoutingUpdateComponent } from './device-routing/device-routing-update/device-routing-update.component';
import { DeviceRoutingAddComponent } from './device-routing/device-routing-add/device-routing-add.component';
import { DeviceUpdateComponent } from './device/device-update/device-update.component';
import { DeviceMasterUpdateComponent } from './device-master/device-master-update/device-master-update.component';
import { DeviceConfigListComponent } from './device-config/device-config-list/device-config-list.component';
import { DeviceMasterAddComponent } from './device-master/device-master-add/device-master-add.component';
import { DeviceAddComponent } from './device/device-add/device-add.component';
import { DeviceLoginComponent } from './device-login/device-login.component';
import { DeviceSignupComponent } from './device-signup/device-signup.component';


const routes: Routes = [
  {path: "", component:DeviceLoginComponent},
  {path: "Login", component:DeviceLoginComponent},
  {path: "Signup", component: DeviceSignupComponent},
  {path: "Device", component: DeviceListComponent },
  {path: "DeviceConfig", component: DeviceConfigListComponent },
  {path: "DeviceRouting", component: DeviceRoutingListComponent },
  {path: "DeviceMaster", component: DeviceMasterListComponent }, 
  {path: "Device/Add" , component: DeviceAddComponent},
  {path: "DeviceConfig/Add", component: DeviceConfigAddComponent},
  {path: "DeviceRouting/Add" , component: DeviceRoutingAddComponent},
  {path: "DeviceMaster/Add" , component: DeviceMasterAddComponent},
  {path: "Device/update/:id", component: DeviceUpdateComponent},
  {path: "DeviceConfig/update/:id", component: DeviceConfigUpdateComponent},
  {path: "DeviceRouting/update/:id", component: DeviceRoutingUpdateComponent},
  {path: "DeviceMaster/update/:id", component: DeviceMasterUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }