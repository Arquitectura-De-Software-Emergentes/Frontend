import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormJobOfferComponent } from './edit-form-job-offer.component';

describe('EditFormJobOfferComponent', () => {
  let component: EditFormJobOfferComponent;
  let fixture: ComponentFixture<EditFormJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormJobOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
