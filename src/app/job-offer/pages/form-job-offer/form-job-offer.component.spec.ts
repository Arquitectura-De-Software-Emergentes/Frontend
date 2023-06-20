import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJobOfferComponent } from './form-job-offer.component';

describe('FormJobOfferComponent', () => {
  let component: FormJobOfferComponent;
  let fixture: ComponentFixture<FormJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormJobOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
