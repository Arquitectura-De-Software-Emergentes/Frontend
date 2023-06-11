import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { RouterModule } from '@angular/router';
import { IamRoutingModule } from './iam-routing.module';
import { ProfessionalProfileApplicantComponent } from './pages/professional-profile-applicant/professional-profile-applicant.component';
import { DialogAddExperienceComponent } from './components/dialog-add-experience/dialog-add-experience.component';
import { RegisterApplicantComponent } from './pages/register-applicant/register-applicant.component';
import { TeacherRegisterComponent } from './pages/teacher-register/teacher-register.component';


@NgModule({
  declarations: [
    ProfessionalProfileApplicantComponent,
    DialogAddExperienceComponent,
    RegisterApplicantComponent, TeacherRegisterComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    IamRoutingModule
  ]
})
export class IAMModule { }
