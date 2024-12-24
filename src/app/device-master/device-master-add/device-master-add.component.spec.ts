import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMasterAddComponent } from './device-master-add.component';

describe('DeviceMasterAddComponent', () => {
  let component: DeviceMasterAddComponent;
  let fixture: ComponentFixture<DeviceMasterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMasterAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
