import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'application',
    loadChildren: () => import('../application/application.module').then(m => m.ApplicationModule),
  },
  {
    path: 'iam',
    loadChildren:()=>import('../iam/iam.module').then(m=>m.IAMModule),
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
