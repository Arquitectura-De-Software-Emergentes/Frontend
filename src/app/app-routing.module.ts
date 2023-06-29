import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './iam/pages/login/login.component';
import { ChooseUserComponent } from './iam/pages/choose-user/choose-user.component';
import { RegisterApplicantComponent } from './iam/pages/register-applicant/register-applicant.component';
import { RegisterRecruiterComponent } from './iam/pages/register-recruiter/register-recruiter.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/public/public.module').then((m) => m.PublicModule),
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    children:[
      {
        path:'',
        component: ChooseUserComponent
      },
      {
        path:'applicant',
        component: RegisterApplicantComponent
      },
      {
        path:'recruiter',
        component: RegisterRecruiterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
