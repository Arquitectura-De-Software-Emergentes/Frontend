import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-assessment-recruiter',
  templateUrl: './adm-assessment-recruiter.component.html',
  styleUrls: ['./adm-assessment-recruiter.component.css']
})
export class AdmAssessmentRecruiterComponent {
  panelOpenState = false;
  assessments: any[]=[];
}
