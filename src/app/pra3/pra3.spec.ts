import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra3 } from './pra3';

describe('Pra3', () => {
  let component: Pra3;
  let fixture: ComponentFixture<Pra3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra3],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
