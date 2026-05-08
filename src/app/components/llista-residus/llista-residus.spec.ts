import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaResidus } from './llista-residus';

describe('LlistaResidus', () => {
  let component: LlistaResidus;
  let fixture: ComponentFixture<LlistaResidus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaResidus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaResidus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
