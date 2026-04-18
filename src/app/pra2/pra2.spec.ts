import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra2 } from './pra2';

describe('Pra2', () => {
  let component: Pra2;
  let fixture: ComponentFixture<Pra2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra2],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
