import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { HomeApplicantComponent } from './pages/home-applicant/home-applicant.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UiModule,
    HomeApplicantComponent
  ]
})
export class ApplicationModule { }
