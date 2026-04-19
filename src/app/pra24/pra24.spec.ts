import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra24 } from './pra24';

describe('Pra24', () => {
  let component: Pra24;
  let fixture: ComponentFixture<Pra24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra24],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra24);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
