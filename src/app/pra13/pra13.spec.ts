import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra13 } from './pra13';

describe('Pra13', () => {
  let component: Pra13;
  let fixture: ComponentFixture<Pra13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pra13],
    }).compileComponents();

    fixture = TestBed.createComponent(Pra13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
