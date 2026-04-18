import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra8 } from './pra8';

describe('Pra8', () => {
  let component: Pra8;
  let fixture: ComponentFixture<Pra8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra8],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
