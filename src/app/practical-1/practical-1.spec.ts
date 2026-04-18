import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practical1 } from './practical-1';

describe('Practical1', () => {
  let component: Practical1;
  let fixture: ComponentFixture<Practical1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practical1],
    }).compileComponents();

    fixture = TestBed.createComponent(Practical1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
