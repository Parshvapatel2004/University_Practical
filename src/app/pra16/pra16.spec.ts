import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra16 } from './pra16';

describe('Pra16', () => {
  let component: Pra16;
  let fixture: ComponentFixture<Pra16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra16],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
