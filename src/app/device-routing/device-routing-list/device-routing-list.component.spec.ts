import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRoutingListComponent } from './device-routing-list.component';

describe('DeviceRoutingListComponent', () => {
  let component: DeviceRoutingListComponent;
  let fixture: ComponentFixture<DeviceRoutingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceRoutingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceRoutingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
