import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobOfferComponent } from './apply-job-offer.component';

describe('ApplyJobOfferComponent', () => {
  let component: ApplyJobOfferComponent;
  let fixture: ComponentFixture<ApplyJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyJobOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
