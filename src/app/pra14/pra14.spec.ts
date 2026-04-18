import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra14 } from './pra14';

describe('Pra14', () => {
  let component: Pra14;
  let fixture: ComponentFixture<Pra14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra14],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
