import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { HomeApplicantComponent } from './pages/home-applicant/home-applicant.component';
import { PublicModule } from '../public/public.module';


@NgModule({
  declarations: [
    HomeApplicantComponent
  ],
  imports: [
    CommonModule,
    UiModule,
  ]
})
export class ApplicationModule { }
