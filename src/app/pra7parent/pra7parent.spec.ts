import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra7parent } from './pra7parent';

describe('Pra7parent', () => {
  let component: Pra7parent;
  let fixture: ComponentFixture<Pra7parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra7parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra7parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
