import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { ApplicationRoutingModule } from './application-routing.module';
import { DialogComponentComponent } from '../UI/components/dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ApplyJobOfferComponent } from './components/apply-job-offer/apply-job-offer.component';


@NgModule({
  declarations: [
    DialogComponentComponent, ApplyJobOfferComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    UiModule, ApplicationRoutingModule
  ],
  exports:[ApplyJobOfferComponent],
  entryComponents:[
    DialogComponentComponent
  ]
})
export class ApplicationModule { }
