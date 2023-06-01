import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from './pages/recruiter-profile/recruiter-profile.component';
import { UiModule } from '../UI/ui.module';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AssessmentRoutingModule } from './assessment-routing.module';


@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent,
    AdmAssessmentRecruiterComponent,
  ],
  imports: [
    CommonModule,
    UiModule, AssessmentRoutingModule
  ]
})
export class AssessmentModule { }
