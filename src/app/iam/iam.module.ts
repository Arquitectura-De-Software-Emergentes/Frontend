import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { RouterModule } from '@angular/router';
import { IamRoutingModule } from './iam-routing.module';
import { ProfessionalProfileApplicantComponent } from './pages/professional-profile-applicant/professional-profile-applicant.component';
import { DialogAddExperienceComponent } from './components/dialog-add-experience/dialog-add-experience.component';
import { RegisterApplicantComponent } from './pages/register-applicant/register-applicant.component';
import { TeacherRegisterComponent } from './pages/teacher-register/teacher-register.component';
import { LoginComponent } from './pages/login/login.component';
import { ChooseUserComponent } from './pages/choose-user/choose-user.component';
import { RegisterRecruiterComponent } from './pages/register-recruiter/register-recruiter.component';


@NgModule({
  declarations: [
    ProfessionalProfileApplicantComponent,
    DialogAddExperienceComponent,
    RegisterApplicantComponent, TeacherRegisterComponent, LoginComponent, ChooseUserComponent, RegisterRecruiterComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    IamRoutingModule
  ]
})
export class IAMModule { }
