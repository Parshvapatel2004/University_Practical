import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra12 } from './pra12';

describe('Pra12', () => {
  let component: Pra12;
  let fixture: ComponentFixture<Pra12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra12],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
