import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AssessmentStagesRecruiterComponent } from './pages/assessment-stages-recruiter/assessment-stages-recruiter.component';

const routes: Routes = [
  {
    path: '',
    component: AdmAssessmentRecruiterComponent,
  },
  {
    path: 'view-assesment-process',
    component: AssessmentStagesRecruiterComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule { }
