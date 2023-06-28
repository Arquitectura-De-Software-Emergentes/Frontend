import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentApplicationsComponent } from './assessment-applications.component';

describe('AssessmentApplicationsComponent', () => {
  let component: AssessmentApplicationsComponent;
  let fixture: ComponentFixture<AssessmentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
