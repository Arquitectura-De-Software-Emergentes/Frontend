import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from './pages/recruiter-profile/recruiter-profile.component';
import { UiModule } from '../UI/ui.module';


@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class AssessmentModule { }
