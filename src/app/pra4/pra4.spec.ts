import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra4 } from './pra4';

describe('Pra4', () => {
  let component: Pra4;
  let fixture: ComponentFixture<Pra4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra4],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
