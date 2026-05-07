import { TestBed } from '@angular/core/testing';

import { Meet } from './meet';

describe('Meet', () => {
  let service: Meet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Meet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
