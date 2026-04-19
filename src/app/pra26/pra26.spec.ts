import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra26 } from './pra26';

describe('Pra26', () => {
  let component: Pra26;
  let fixture: ComponentFixture<Pra26>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra26],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra26);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
