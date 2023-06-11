import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import {  HomeRecruiterComponent } from './pages/home-recruiter/home-recruiter.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { DialogComponentComponent } from '../UI/components/dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeApplicantComponent } from './pages/home-applicant/home-applicant.component';


@NgModule({
  declarations: [
    DialogComponentComponent, HomeRecruiterComponent, HomeApplicantComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    UiModule, ApplicationRoutingModule
  ],
  entryComponents:[
    DialogComponentComponent
  ]
})
export class ApplicationModule { }
