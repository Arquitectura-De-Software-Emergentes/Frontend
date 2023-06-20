import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { FormJobOfferComponent } from './pages/form-job-offer/form-job-offer.component';
import { JobOfferRoutingModule } from './job-offer-routing.module';


@NgModule({
  declarations: [
    FormJobOfferComponent
  ],
  imports: [
    CommonModule,
    UiModule, JobOfferRoutingModule
  ]
})
export class JobOfferModule { }
