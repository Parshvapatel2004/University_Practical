import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra6 } from './pra6';

describe('Pra6', () => {
  let component: Pra6;
  let fixture: ComponentFixture<Pra6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra6],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
