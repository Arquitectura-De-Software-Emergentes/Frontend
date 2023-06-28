import { Component } from '@angular/core';
import { Application } from 'src/app/application/models/application';
import { ApplicationService } from 'src/app/application/services/application.service';
import {
  AssessmentService,
} from '../../services/assessment.service';
import { Router } from '@angular/router';
import { AssessmentDetails } from '../../models/assessmentDetails';

@Component({
  selector: 'app-adm-applications',
  templateUrl: './adm-applications.component.html',
  styleUrls: ['./adm-applications.component.css'],
})
export class AdmApplicationsComponent {
  applications: Application[] = [];
  showSpinner: boolean=false;
  constructor(
    private applicationService: ApplicationService,
    private assessmentService: AssessmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllApplications()
  }

  getAllApplications(){
    this.showSpinner=true
    this.applicationService
      .getApplicationsByIdApplicant(1)
      .subscribe((resp) => {this.applications = resp; this.showSpinner=false});
  }

  startTest() {
    let TestId: number = 0;
    this.assessmentService.getAssessmentByIdJobOffer(1).subscribe((resp) => {
      console.log(resp);
      TestId = (resp as AssessmentDetails).testId;
      this.router.navigate([`assessment/submit-test`, { idTest: TestId }]);
    });
    /*this.router.navigate([`/recruiter/view-assesment-process`,
    { idTest: id },
   ])*/
  }

  sendVideoPresentation() {
    this.assessmentService.getAssessmentByIdJobOffer(1).subscribe((resp) => {
      console.log(resp);
      this.router.navigate([`assessment/send-video`, { idAssessment: (resp as AssessmentDetails).assessmentId }]);
    });
  }
}
