import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout-recruiter/layout.component';
import { LayoutApplicantComponent } from './pages/layout-applicant/layout-applicant.component';
import { HomeApplicantComponent } from '../application/pages/home-applicant/home-applicant.component';


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
    ]
  },
  {
    path:'applicant',
    component: LayoutApplicantComponent,
    children:[
      {
        path:'',
        component:HomeApplicantComponent
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
    path:'',
    redirectTo:'recruiter', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: 'recruiter'
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
