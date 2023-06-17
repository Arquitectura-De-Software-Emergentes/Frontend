import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentResponse } from '../../models/jobOffer';
import { Availability, Experience, Modality, Type } from 'src/app/shared/enums';

@Component({
  selector: 'app-assessment-stages-recruiter',
  templateUrl: './assessment-stages-recruiter.component.html',
  styleUrls: ['./assessment-stages-recruiter.component.css'],
})
export class AssessmentStagesRecruiterComponent implements OnInit {
  id: string = '';
  constructor(private route: ActivatedRoute,private router: Router) {}
  assessment: AssessmentResponse = {
    id: '1',
    jobOfferId: 1,
    title: 'Math Teacher',
    recruiterInstitution: 'High school math teacher required late shift',
    initialDate: new Date(),
    endDate: new Date(),
    avalability: Availability.AVAILABLE,
    assessmentStages: [
      { activities: [{name: 'Video Presentation'},{name:'Mathematical reasoning test'}], title: 'Stage 1' },
      { activities: [{name:'Interview'}], title: 'Stage 2' },
    ],
    positionProfile:{
      id:1,
      course:{course:"Math"},
      experience:Experience.PRACTICE,
      modality:Modality.VIRTUAL,
      name:"aeaea",
      type:Type.PART_TIME
    }
  };
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('idProcess')!;
  }
  volver(){
    this.router.navigate([`recruiter/assessment`])
  }
}
