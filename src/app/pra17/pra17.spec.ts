import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra17 } from './pra17';

describe('Par17', () => {
  let component: Pra17;
  let fixture: ComponentFixture<Pra17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra17],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
