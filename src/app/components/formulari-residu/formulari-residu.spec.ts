import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariResidu } from './formulari-residu';

describe('FormulariResidu', () => {
  let component: FormulariResidu;
  let fixture: ComponentFixture<FormulariResidu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariResidu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariResidu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
