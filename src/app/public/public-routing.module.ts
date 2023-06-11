import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout-recruiter/layout-recruiter.component';
import { LayoutApplicantComponent } from './pages/layout-applicant/layout-applicant.component';
import { HomeRecruiterComponent } from '../application/pages/home-recruiter/home-recruiter.component';
import { RegisterApplicantComponent } from '../iam/pages/register-applicant/register-applicant.component';


const routes: Routes = [
  {
    path:'recruiter',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('../assessment/assessment.module').then(m=>m.AssessmentModule),
      },
      {
        path: 'application',
        loadChildren: () => import('../application/application.module').then(m => m.ApplicationModule),
      },
      {
        path: 'iam',
        loadChildren:()=>import('../iam/iam.module').then(m=>m.IAMModule),
      },
      {
        path:'assessment',
        loadChildren: () => import('../assessment/assessment.module').then(m=>m.AssessmentModule),
      },
    ]
  },
  {
    path:'applicant',
    component: LayoutApplicantComponent,
    children:[
      {
        path:'',
        component:HomeRecruiterComponent
      },
      {
        path:'assessment',
        loadChildren: () => import('../assessment/assessment.module').then(m=>m.AssessmentModule),
      },
      {
        path: 'application',
        loadChildren: () => import('../application/application.module').then(m => m.ApplicationModule),
      },
      {
        path: 'iam',
        loadChildren:()=>import('../iam/iam.module').then(m=>m.IAMModule),
      },
    ]
  },  
  {
    path:'register/applicant',
    component: RegisterApplicantComponent
  },
  {
    path:'',
    redirectTo:'register/applicant', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: 'register/applicant'
  },

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
