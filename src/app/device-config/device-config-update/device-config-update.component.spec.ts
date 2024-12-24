import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConfigUpdateComponent } from './device-config-update.component';

describe('DeviceConfigUpdateComponent', () => {
  let component: DeviceConfigUpdateComponent;
  let fixture: ComponentFixture<DeviceConfigUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceConfigUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceConfigUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
