import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra15 } from './pra15';

describe('Pra15', () => {
  let component: Pra15;
  let fixture: ComponentFixture<Pra15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra15],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
