import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRoutingUpdateComponent } from './device-routing-update.component';

describe('DeviceRoutingUpdateComponent', () => {
  let component: DeviceRoutingUpdateComponent;
  let fixture: ComponentFixture<DeviceRoutingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceRoutingUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceRoutingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
