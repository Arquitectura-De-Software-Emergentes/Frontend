import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from '../iam/pages/recruiter-profile/recruiter-profile.component';
import { UiModule } from '../UI/ui.module';
import { RecruiterAnnouncementsComponent } from './pages/recruiter-announcements/recruiter-announcements.component';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { AssessmentStagesRecruiterComponent } from './pages/assessment-stages-recruiter/assessment-stages-recruiter.component';
import { ScheduleInterviewRecruiterComponent } from './pages/schedule-interview-recruiter/schedule-interview-recruiter.component';
import { DialogScheduleInterviewComponent } from './components/dialog-schedule-interview/dialog-schedule-interview.component';
@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent,
    RecruiterAnnouncementsComponent,
    AdmAssessmentRecruiterComponent,
    AssessmentStagesRecruiterComponent,
    ScheduleInterviewRecruiterComponent,
    DialogScheduleInterviewComponent,
  ],
  imports: [CommonModule, UiModule, AssessmentRoutingModule],
})
export class AssessmentModule {}
