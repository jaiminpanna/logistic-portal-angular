import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMasterUpdateComponent } from './device-master-update.component';

describe('DeviceMasterUpdateComponent', () => {
  let component: DeviceMasterUpdateComponent;
  let fixture: ComponentFixture<DeviceMasterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMasterUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMasterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
