import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from '../iam/recruiter-profile/recruiter-profile.component';
import { UiModule } from '../UI/ui.module';
import { RecruiterAnnouncementsComponent } from './pages/recruiter-announcements/recruiter-announcements.component';


@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent,
    RecruiterAnnouncementsComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class AssessmentModule { }
