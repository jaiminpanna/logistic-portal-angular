import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DeviceConfigAddComponent } from './device-config/device-config-add/device-config-add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DeviceAddComponent } from './device/device-add/device-add.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceRoutingAddComponent } from './device-routing/device-routing-add/device-routing-add.component';
import { DeviceRoutingListComponent } from './device-routing/device-routing-list/device-routing-list.component';
import { DeviceMasterAddComponent } from './device-master/device-master-add/device-master-add.component';
import { DeviceMasterListComponent } from './device-master/device-master-list/device-master-list.component';
import { DeviceConfigUpdateComponent } from './device-config/device-config-update/device-config-update.component';
import { DeviceRoutingUpdateComponent } from './device-routing/device-routing-update/device-routing-update.component';
import { DeviceUpdateComponent } from './device/device-update/device-update.component';
import { DeviceMasterUpdateComponent } from './device-master/device-master-update/device-master-update.component';
import { DeviceConfigListComponent } from './device-config/device-config-list/device-config-list.component';
import { DeviceLoginComponent } from './device-login/device-login.component';
import { MatSliderModule} from '@angular/material/slider';
import { MatCheckboxModule} from '@angular/material/checkbox'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { DeviceSignupComponent } from './device-signup/device-signup.component';




@NgModule({
  declarations: [
    AppComponent,
    DeviceConfigAddComponent,
    DeviceConfigListComponent,
    DeviceAddComponent,
    DeviceListComponent,
    DeviceRoutingAddComponent,
    DeviceRoutingListComponent,
    DeviceMasterAddComponent,
    DeviceMasterListComponent,
    DeviceConfigUpdateComponent,
    DeviceRoutingUpdateComponent,
    DeviceUpdateComponent,
    DeviceMasterUpdateComponent,
    DeviceLoginComponent,
    DeviceSignupComponent
],
  imports: [
    BrowserModule,
    NgbModule,
    MatSliderModule,
    MatCheckboxModule,
    BrowserAnimationsModule,MatButtonModule,
    MatIconModule, MatDialogModule,
    MatMenuModule, NgxSliderModule, 
    MatToolbarModule, MatSelectModule, MatSortModule,
    MatOptionModule, FormsModule, MatTableModule, MatPaginatorModule, RouterModule, AppRoutingModule, HttpClientModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
