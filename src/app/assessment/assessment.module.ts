import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from './pages/recruiter-profile/recruiter-profile.component';


@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AssessmentModule { }
