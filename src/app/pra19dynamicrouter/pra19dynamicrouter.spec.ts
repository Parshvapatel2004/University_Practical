import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra19dynamicrouter } from './pra19dynamicrouter';

describe('Pra19dynamicrouter', () => {
  let component: Pra19dynamicrouter;
  let fixture: ComponentFixture<Pra19dynamicrouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra19dynamicrouter],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra19dynamicrouter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
