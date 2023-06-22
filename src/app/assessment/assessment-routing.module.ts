import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AdmTestsComponent } from './pages/adm-tests/adm-tests.component';
import { AssessmentStagesRecruiterComponent } from './pages/assessment-stages-recruiter/assessment-stages-recruiter.component';
import { ScheduleInterviewRecruiterComponent } from './pages/schedule-interview-recruiter/schedule-interview-recruiter.component';

const routes: Routes = [
  {
    path: '',
    component: AdmAssessmentRecruiterComponent,
  },
  {
    path: 'view-assesment-process',
    component: AssessmentStagesRecruiterComponent,
  },
  {
    path: 'schedule-interview',
    component: ScheduleInterviewRecruiterComponent,
  },
  {
    path: 'tests',
    component: AdmTestsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule { }
