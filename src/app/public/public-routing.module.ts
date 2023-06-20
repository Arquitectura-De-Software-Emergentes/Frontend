import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: 'iam',
        loadChildren: () =>
          import('../iam/iam.module').then((m) => m.IAMModule),
      },
      {
        path: 'job-offer',
        loadChildren: () =>
          import('../job-offer/job-offer.module').then((m) => m.JobOfferModule),
      },
      {
        path: 'assessment',
        loadChildren: () =>
          import('../assessment/assessment.module').then(
            (m) => m.AssessmentModule
          ),
      },
      {
        path: 'application',
        loadChildren: () =>
          import('../application/application.module').then(
            (m) => m.ApplicationModule
          ),
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
