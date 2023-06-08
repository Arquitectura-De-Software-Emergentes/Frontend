import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProfileApplicantComponent } from './professional-profile-applicant.component';

describe('ProfessionalProfileApplicantComponent', () => {
  let component: ProfessionalProfileApplicantComponent;
  let fixture: ComponentFixture<ProfessionalProfileApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalProfileApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalProfileApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
