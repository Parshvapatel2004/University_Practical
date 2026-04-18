import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra19 } from './pra19';

describe('Pra19', () => {
  let component: Pra19;
  let fixture: ComponentFixture<Pra19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra19],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
