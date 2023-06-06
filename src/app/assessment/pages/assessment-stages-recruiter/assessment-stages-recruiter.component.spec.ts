import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentStagesRecruiterComponent } from './assessment-stages-recruiter.component';

describe('AssessmentStagesRecruiterComponent', () => {
  let component: AssessmentStagesRecruiterComponent;
  let fixture: ComponentFixture<AssessmentStagesRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentStagesRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentStagesRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
