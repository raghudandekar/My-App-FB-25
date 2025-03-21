import { TestBed } from '@angular/core/testing';

import { Studentidcardservices } from './studentidcard.service';

describe('StudentidcardService', () => {
  let service: Studentidcardservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studentidcardservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
