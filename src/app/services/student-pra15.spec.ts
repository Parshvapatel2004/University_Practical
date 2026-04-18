import { TestBed } from '@angular/core/testing';

import { StudentPra15 } from '../services/student-pra15';

describe('StudentPra15', () => {
  let service: StudentPra15;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentPra15);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
