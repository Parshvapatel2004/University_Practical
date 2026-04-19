import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra21 } from './pra21';

describe('Pra21', () => {
  let component: Pra21;
  let fixture: ComponentFixture<Pra21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra21],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
