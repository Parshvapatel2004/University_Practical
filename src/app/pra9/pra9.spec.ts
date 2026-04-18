import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra9 } from './pra9';

describe('Pra9', () => {
  let component: Pra9;
  let fixture: ComponentFixture<Pra9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra9],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
