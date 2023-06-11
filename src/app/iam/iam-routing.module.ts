import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterProfileComponent } from './pages/recruiter-profile/recruiter-profile.component';
import { ProfessionalProfileApplicantComponent } from './pages/professional-profile-applicant/professional-profile-applicant.component';
import { TeacherRegisterComponent } from './pages/teacher-register/teacher-register.component';

const routes: Routes = [
    {
      path: 'recruiter-profile',
      component: RecruiterProfileComponent
    },
    {
      path:'professional-profile',
      component: ProfessionalProfileApplicantComponent
    }
  ]
  @NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class IamRoutingModule { }