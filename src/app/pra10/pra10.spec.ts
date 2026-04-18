import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra10 } from './pra10';

describe('Pra10', () => {
  let component: Pra10;
  let fixture: ComponentFixture<Pra10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra10],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
