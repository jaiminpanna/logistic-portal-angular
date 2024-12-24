import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMasterListComponent } from './device-master-list.component';

describe('DeviceMasterListComponent', () => {
  let component: DeviceMasterListComponent;
  let fixture: ComponentFixture<DeviceMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMasterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
