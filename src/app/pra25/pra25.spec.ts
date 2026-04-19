import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra25 } from './pra25';

describe('Pra25', () => {
  let component: Pra25;
  let fixture: ComponentFixture<Pra25>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra25],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra25);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
