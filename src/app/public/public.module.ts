import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout-recruiter/layout.component';
import { UiModule } from '../UI/ui.module';
import { PublicRoutingModule } from './public-routing.module';
import { AssessmentModule } from '../assessment/assessment.module';
import { LayoutApplicantComponent } from './pages/layout-applicant/layout-applicant.component';



@NgModule({
  declarations: [LayoutComponent, LayoutApplicantComponent],
  imports: [
    CommonModule, UiModule, PublicRoutingModule
  ],
  exports:[LayoutComponent]
  
})
export class PublicModule { }
