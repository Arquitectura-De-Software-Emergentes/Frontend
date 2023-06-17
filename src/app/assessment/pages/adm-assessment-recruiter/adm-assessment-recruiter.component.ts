import { Component } from '@angular/core';
import { AssessmentResponse, JobOffer } from '../../models/jobOffer';
import { Router } from '@angular/router';
import { Availability, Currency, Experience, Modality, Type } from 'src/app/shared/enums';

@Component({
  selector: 'app-adm-assessment-recruiter',
  templateUrl: './adm-assessment-recruiter.component.html',
  styleUrls: ['./adm-assessment-recruiter.component.css'],
})
export class AdmAssessmentRecruiterComponent {
  panelOpenState = false;
  public availability = Availability;
  jobOffers: JobOffer[] = [
    {
      id: 1,
      recruiterId: 2,
      title: 'Math Teacher',
      description: 'Puesto de trabajo para docente de primaria',
      initialDate: new Date(),
      endDate: new Date(),
      salary: {mount:10000,currency:Currency.PEN},
      maxApplications: 40,
      numberApplications: 20,
      availability: Availability.AVAILABLE,
      positionProfile:{
        id:1,
        course:{course:"Math"},
        experience:Experience.PRACTICE,
        modality:Modality.VIRTUAL,
        name:"aeaea",
        type:Type.PART_TIME
      }
    },
  ];
  assessments: AssessmentResponse[] = [
    {
      id: '1',
      jobOfferId: 1,
      title: 'Math Teacher',
      recruiterInstitution: 'High school math teacher required late shift',
      initialDate: new Date(),
      endDate: new Date(),
      avalability: Availability.AVAILABLE,
      assessmentStages: [
        { activities: null, title: 'Fase de revisión de video' },
        { activities: null, title: 'Fase de pruebas de conocimientos' }
      ],
      positionProfile:{
        id:1,
        course:{course:"Math"},
        experience:Experience.PRACTICE,
        modality:Modality.VIRTUAL,
        name:"aeaea",
        type:Type.PART_TIME
      }
    },
    {
      id: '2',
      jobOfferId: 1,
      assessmentStages: [
        { activities: null, title: 'Fase de pruebas de conocimientos' },
      ],
      title: 'Science Teacher',
      recruiterInstitution: 'High school math teacher required late shift',
      initialDate: new Date(),
      endDate: new Date(),
      avalability: Availability.AVAILABLE,
      positionProfile:{
        id:1,
        course:{course:"Math"},
        experience:Experience.PRACTICE,
        modality:Modality.VIRTUAL,
        name:"aeaea",
        type:Type.PART_TIME
      }
    },
    
  ];
  constructor(private router: Router){}
  verDetalles(id: string):void{
    this.router.navigate([`/recruiter/view-assesment-process`,
    { idProcess: id },
   ])
  }
}
