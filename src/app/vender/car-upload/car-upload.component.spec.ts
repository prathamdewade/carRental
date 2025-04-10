import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUploadComponent } from './car-upload.component';

describe('CarUploadComponent', () => {
  let component: CarUploadComponent;
  let fixture: ComponentFixture<CarUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarUploadComponent]
    });
    fixture = TestBed.createComponent(CarUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
