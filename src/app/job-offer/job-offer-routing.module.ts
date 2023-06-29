import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormJobOfferComponent } from './pages/form-job-offer/form-job-offer.component';
import { EditFormJobOfferComponent } from './pages/edit-form-job-offer/edit-form-job-offer.component';
const routes: Routes = [
  {
    path: 'create',
    component: FormJobOfferComponent,
  },
  {
    path:'edit',
    component: EditFormJobOfferComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOfferRoutingModule {}
