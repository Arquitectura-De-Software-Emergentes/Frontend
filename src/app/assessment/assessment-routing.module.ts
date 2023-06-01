import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';

const routes: Routes = [
  {
    path: '',
    component: AdmAssessmentRecruiterComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule { }
