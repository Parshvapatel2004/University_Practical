import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra5 } from './pra5';

describe('Pra5', () => {
  let component: Pra5;
  let fixture: ComponentFixture<Pra5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra5],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
