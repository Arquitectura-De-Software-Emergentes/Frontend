import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAssessmentRecruiterComponent } from './adm-assessment-recruiter.component';

describe('AdmAssessmentRecruiterComponent', () => {
  let component: AdmAssessmentRecruiterComponent;
  let fixture: ComponentFixture<AdmAssessmentRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAssessmentRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmAssessmentRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
