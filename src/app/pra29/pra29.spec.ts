import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra29 } from './pra29';

describe('Pra29', () => {
  let component: Pra29;
  let fixture: ComponentFixture<Pra29>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra29],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra29);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
