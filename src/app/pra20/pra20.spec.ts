import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra20 } from './pra20';

describe('Pra20', () => {
  let component: Pra20;
  let fixture: ComponentFixture<Pra20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra20],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
