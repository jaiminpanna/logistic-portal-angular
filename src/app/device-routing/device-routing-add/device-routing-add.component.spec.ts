import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRoutingAddComponent } from './device-routing-add.component';

describe('DeviceRoutingAddComponent', () => {
  let component: DeviceRoutingAddComponent;
  let fixture: ComponentFixture<DeviceRoutingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceRoutingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceRoutingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
