import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsclearComponent } from './vehicle-detailsclear.component';

describe('VehicleDetailsclearComponent', () => {
  let component: VehicleDetailsclearComponent;
  let fixture: ComponentFixture<VehicleDetailsclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsclearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
