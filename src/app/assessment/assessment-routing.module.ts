import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AdmTestsComponent } from './pages/adm-tests/adm-tests.component';
import { ScheduleInterviewRecruiterComponent } from './pages/schedule-interview-recruiter/schedule-interview-recruiter.component';
import { FormTestComponent } from './pages/form-test/form-test.component';
import { SendVideoPresentationComponent } from './pages/send-video-presentation/send-video-presentation.component';
import { Subscriber } from 'rxjs';
import { SubmitTestComponent } from './pages/submit-test/submit-test.component';
import { AdmApplicationsComponent } from './pages/adm-applications/adm-applications.component';
import { AssessmentApplicationsComponent } from './pages/assessment-applications/assessment-applications.component';

const routes: Routes = [
  {
    path: '',
    component: AdmAssessmentRecruiterComponent,
  },
  {
    path: 'adm-applications',
    component: AdmApplicationsComponent,
  },
  {
    path: 'applications',
    component: AssessmentApplicationsComponent,
  },
  {
    path: 'schedule-interview',
    component: ScheduleInterviewRecruiterComponent,
  },
  {
    path: 'tests',
    component: AdmTestsComponent
  },
  {
    path: 'tests/create',
    component: FormTestComponent
  },
  {
    path: 'send-video',
    component: SendVideoPresentationComponent
  },
  {
    path: 'submit-test',
    component: SubmitTestComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule { }
