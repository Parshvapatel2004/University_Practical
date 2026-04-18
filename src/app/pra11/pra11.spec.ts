import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra11 } from './pra11';

describe('Pra11', () => {
  let component: Pra11;
  let fixture: ComponentFixture<Pra11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra11],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
