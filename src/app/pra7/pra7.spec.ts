import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra7 } from './pra7';

describe('Pra7', () => {
  let component: Pra7;
  let fixture: ComponentFixture<Pra7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra7],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
