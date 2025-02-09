import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConfigListComponent } from './device-config-list.component';

describe('DeviceConfigListComponent', () => {
  let component: DeviceConfigListComponent;
  let fixture: ComponentFixture<DeviceConfigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceConfigListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
