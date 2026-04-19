import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra23 } from './pra23';

describe('Pra23', () => {
  let component: Pra23;
  let fixture: ComponentFixture<Pra23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra23],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
