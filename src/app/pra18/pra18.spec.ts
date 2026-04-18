import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra18 } from './pra18';

describe('Pra18', () => {
  let component: Pra18;
  let fixture: ComponentFixture<Pra18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra18],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
