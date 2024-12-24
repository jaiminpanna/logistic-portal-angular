import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLoginComponent } from './device-login.component';

describe('DeviceLoginComponent', () => {
  let component: DeviceLoginComponent;
  let fixture: ComponentFixture<DeviceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
