import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationModule } from './application/application.module';
import { AssessmentModule } from './assessment/assessment.module';
import { JobOfferModule } from './job-offer/job-offer.module';
import { IAMModule } from './iam/iam.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApplicationModule,
    AssessmentModule,
    IAMModule,
    JobOfferModule,HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
