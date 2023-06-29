import { Component } from '@angular/core';
import { Application } from 'src/app/application/models/application';
import { ApplicationService } from 'src/app/application/services/application.service';
import {
  AssessmentService,
} from '../../services/assessment.service';
import { Router } from '@angular/router';
import { AssessmentDetails } from '../../models/assessmentDetails';
import { AuthService } from 'src/app/iam/services/auth.service';

@Component({
  selector: 'app-adm-applications',
  templateUrl: './adm-applications.component.html',
  styleUrls: ['./adm-applications.component.css'],
})
export class AdmApplicationsComponent {
  applications: Application[] = [];
  idApplicant: number =0;
  showSpinner: boolean=false;
  constructor(
    private applicationService: ApplicationService,
    private assessmentService: AssessmentService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.idApplicant=this.authService.idUser;
    this.getAllApplications();
  }

  getAllApplications(){
    this.showSpinner=true
    this.applicationService
      .getApplicationsByIdApplicant(this.idApplicant)
      .subscribe((resp) => {this.applications = resp; this.showSpinner=false});
  }

  startTest(idJobOffer: number) {
    let TestId: number = 0;
    this.assessmentService.getAssessmentByIdJobOffer(idJobOffer).subscribe((resp) => {
      TestId = (resp as AssessmentDetails).testId;
      this.router.navigate([`assessment/submit-test`, { idTest: TestId, idJobOffer: idJobOffer }]);
    });
  }

  sendVideoPresentation(idJobOffer: number) {
    this.assessmentService.getAssessmentByIdJobOffer(idJobOffer).subscribe((resp) => {
      this.router.navigate([`assessment/send-video`, { idJobOffer: (resp as AssessmentDetails).jobOfferId }]);
    });
  }
}
