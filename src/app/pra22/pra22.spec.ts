import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra22 } from './pra22';

describe('Pra22', () => {
  let component: Pra22;
  let fixture: ComponentFixture<Pra22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra22],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
