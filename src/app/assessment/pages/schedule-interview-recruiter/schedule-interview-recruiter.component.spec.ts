import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInterviewRecruiterComponent } from './schedule-interview-recruiter.component';

describe('ScheduleInterviewRecruiterComponent', () => {
  let component: ScheduleInterviewRecruiterComponent;
  let fixture: ComponentFixture<ScheduleInterviewRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleInterviewRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleInterviewRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
