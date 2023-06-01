import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { UiModule } from '../UI/ui.module';
import { PublicRoutingModule } from './public-routing.module';
import { AssessmentModule } from '../assessment/assessment.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule, UiModule, PublicRoutingModule
  ],
  exports:[LayoutComponent]
  
})
export class PublicModule { }
