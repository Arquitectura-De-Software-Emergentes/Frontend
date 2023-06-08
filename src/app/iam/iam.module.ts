import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { RouterModule } from '@angular/router';
import { IamRoutingModule } from './iam-routing.module';
import { ProfessionalProfileApplicantComponent } from './pages/professional-profile-applicant/professional-profile-applicant.component';


@NgModule({
  declarations: [
    ProfessionalProfileApplicantComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    IamRoutingModule
  ]
})
export class IAMModule { }
