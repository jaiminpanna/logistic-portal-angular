import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSignupComponent } from './device-signup.component';

describe('DeviceSignupComponent', () => {
  let component: DeviceSignupComponent;
  let fixture: ComponentFixture<DeviceSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
