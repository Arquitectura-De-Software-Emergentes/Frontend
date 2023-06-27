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
import { AdmTestsComponent } from './pages/adm-tests/adm-tests.component';
import { FormTestComponent } from './pages/form-test/form-test.component';
import { DialogOptionsComponent } from './components/dialog-options/dialog-options.component';
@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent,
    RecruiterAnnouncementsComponent,
    AdmAssessmentRecruiterComponent,
    AssessmentStagesRecruiterComponent,
    ScheduleInterviewRecruiterComponent,
    DialogScheduleInterviewComponent,
    AdmTestsComponent,
    FormTestComponent,
    DialogOptionsComponent,
  ],
  imports: [CommonModule, UiModule, AssessmentRoutingModule],
})
export class AssessmentModule {}
