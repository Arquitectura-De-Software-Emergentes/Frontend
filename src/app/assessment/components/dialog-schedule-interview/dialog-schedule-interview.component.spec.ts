import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScheduleInterviewComponent } from './dialog-schedule-interview.component';

describe('DialogScheduleInterviewComponent', () => {
  let component: DialogScheduleInterviewComponent;
  let fixture: ComponentFixture<DialogScheduleInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogScheduleInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogScheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
