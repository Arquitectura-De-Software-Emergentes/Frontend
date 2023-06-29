import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { FormJobOfferComponent } from './pages/form-job-offer/form-job-offer.component';
import { JobOfferRoutingModule } from './job-offer-routing.module';
import { EditFormJobOfferComponent } from './pages/edit-form-job-offer/edit-form-job-offer.component';


@NgModule({
  declarations: [
    FormJobOfferComponent,
    EditFormJobOfferComponent
  ],
  imports: [
    CommonModule,
    UiModule, JobOfferRoutingModule
  ]
})
export class JobOfferModule { }
