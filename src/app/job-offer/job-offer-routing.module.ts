import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormJobOfferComponent } from './pages/form-job-offer/form-job-offer.component';
const routes: Routes = [
  {
    path: 'create',
    component: FormJobOfferComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOfferRoutingModule {}
