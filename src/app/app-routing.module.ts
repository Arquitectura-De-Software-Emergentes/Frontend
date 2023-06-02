import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeApplicantComponent } from './application/pages/home-applicant/home-applicant.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeApplicantComponent,
    loadChildren: () =>
      import('../app/public/public.module').then((m) => m.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
