import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { RecruiterProfileComponent } from '../iam/recruiter-profile/recruiter-profile.component';
import { UiModule } from '../UI/ui.module';
import { RecruiterAnnouncementsComponent } from './pages/recruiter-announcements/recruiter-announcements.component';
import { AdmAssessmentRecruiterComponent } from './pages/adm-assessment-recruiter/adm-assessment-recruiter.component';
import { AssessmentRoutingModule } from './assessment-routing.module';


import {MatGridListModule} from '@angular/material/grid-list';
import { AssessmentStagesRecruiterComponent } from './pages/assessment-stages-recruiter/assessment-stages-recruiter.component';
@NgModule({
  declarations: [
    EvaluationsComponent,
    RecruiterProfileComponent,
    RecruiterAnnouncementsComponent,
    AdmAssessmentRecruiterComponent,
    AssessmentStagesRecruiterComponent,
  ],
  imports: [
    CommonModule,
    UiModule, AssessmentRoutingModule,MatGridListModule
  ]
})
export class AssessmentModule { }
