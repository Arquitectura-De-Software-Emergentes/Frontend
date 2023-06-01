import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'application',
    loadChildren: () => import('../application/application.module').then(m => m.ApplicationModule),
  },
  {
    path: 'assessment',
    loadChildren: () => import('../assessment/assessment.module').then(m=>m.AssessmentModule),
  },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
