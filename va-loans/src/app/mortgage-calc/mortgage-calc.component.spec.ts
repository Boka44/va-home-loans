import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalcComponent } from './mortgage-calc.component';

describe('MortgageCalcComponent', () => {
  let component: MortgageCalcComponent;
  let fixture: ComponentFixture<MortgageCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
