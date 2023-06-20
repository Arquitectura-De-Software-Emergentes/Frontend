import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuApplicantComponent } from './components/menu-applicant/menu-applicant.component';
import { MenuRecruiterComponent } from './components/menu-recruiter/menu-recruiter.component';
import { ApplicationModule } from '../application/application.module';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    MenuApplicantComponent,
    MenuRecruiterComponent,
  ],
  imports: [CommonModule, UiModule, PublicRoutingModule, ApplicationModule],
  exports: [],
})
export class PublicModule {}
