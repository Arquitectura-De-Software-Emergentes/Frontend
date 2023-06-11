import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRecruiterComponent } from './pages/layout-recruiter/layout-recruiter.component';
import { UiModule } from '../UI/ui.module';
import { PublicRoutingModule } from './public-routing.module';
import { LayoutApplicantComponent } from './pages/layout-applicant/layout-applicant.component';



@NgModule({
  declarations: [ LayoutApplicantComponent,LayoutRecruiterComponent],
  imports: [
    CommonModule, UiModule, PublicRoutingModule,
  ],
  exports:[]
  
})
export class PublicModule { }
