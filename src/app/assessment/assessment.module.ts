import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from '../iam/pages/recruiter-profile/recruiter-profile.component';
import { UiModule } from '../UI/ui.module';
import { RecruiterAnnouncementsComponent } from './pages/recruiter-announcements/recruiter-announcements.component';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { ScheduleInterviewRecruiterComponent } from './pages/schedule-interview-recruiter/schedule-interview-recruiter.component';
import { DialogScheduleInterviewComponent } from './components/dialog-schedule-interview/dialog-schedule-interview.component';
import { AdmTestsComponent } from './pages/adm-tests/adm-tests.component';
import { FormTestComponent } from './pages/form-test/form-test.component';
import { DialogOptionsComponent } from './components/dialog-options/dialog-options.component';
import { SendVideoPresentationComponent } from './pages/send-video-presentation/send-video-presentation.component';
import { SubmitTestComponent } from './pages/submit-test/submit-test.component';
import { AdmApplicationsComponent } from './pages/adm-applications/adm-applications.component';
import { AssessmentApplicationsComponent } from './pages/assessment-applications/assessment-applications.component';
@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent,
    RecruiterAnnouncementsComponent,
    AdmAssessmentRecruiterComponent,
    ScheduleInterviewRecruiterComponent,
    DialogScheduleInterviewComponent,
    AdmTestsComponent,
    FormTestComponent,
    DialogOptionsComponent,
    SendVideoPresentationComponent,
    SubmitTestComponent,
    AdmApplicationsComponent,
    AssessmentApplicationsComponent,
  ],
  imports: [CommonModule, UiModule, AssessmentRoutingModule],
})
export class AssessmentModule {}
