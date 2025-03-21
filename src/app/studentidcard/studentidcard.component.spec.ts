import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentidcardComponent } from './studentidcard.component';

describe('StudentidcardComponent', () => {
  let component: StudentidcardComponent;
  let fixture: ComponentFixture<StudentidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentidcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
