import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterAnnouncementsComponent } from './recruiter-announcements.component';

describe('RecruiterAnnouncementsComponent', () => {
  let component: RecruiterAnnouncementsComponent;
  let fixture: ComponentFixture<RecruiterAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
