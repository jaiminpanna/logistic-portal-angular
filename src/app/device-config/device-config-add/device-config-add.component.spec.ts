import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConfigAddComponent } from './device-config-add.component';

describe('DeviceConfigAddComponent', () => {
  let component: DeviceConfigAddComponent;
  let fixture: ComponentFixture<DeviceConfigAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceConfigAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
