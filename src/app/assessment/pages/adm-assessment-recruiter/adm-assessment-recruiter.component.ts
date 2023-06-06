import { Component } from '@angular/core';
import { AssessmentResponse, JobOffer } from '../../models/jobOffer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-assessment-recruiter',
  templateUrl: './adm-assessment-recruiter.component.html',
  styleUrls: ['./adm-assessment-recruiter.component.css'],
})
export class AdmAssessmentRecruiterComponent {
  panelOpenState = false;
  jobOffers: JobOffer[] = [
    {
      id: 1,
      recruiterId: 2,
      title: 'Docente de primaria para curso de Matemáticas',
      description: 'Puesto de trabajo para docente de primaria',
      initialDate: new Date(),
      endDate: new Date(),
      salary: 5000,
      maxApplications: 40,
      numberApplications: 20,
      avalability: 'Disponible',
    },
  ];
  assessments: AssessmentResponse[] = [
    {
      id: '1',
      jobOfferId: 1,
      title: 'Docente de primaria para curso de Matemáticas',
      recruiterInstitution: 'Puesto de trabajo para docente de primaria',
      initialDate: new Date(),
      endDate: new Date(),
      avalability: 'Available',
      assessmentStages: [
        { activities: null, title: 'Fase de revisión de video' },
        { activities: null, title: 'Fase de pruebas de conocimientos' }
      ],
    },
    {
      id: '2',
      jobOfferId: 1,
      assessmentStages: [
        { activities: null, title: 'Fase de pruebas de conocimientos' },
      ],
      title: 'Docente de primaria para curso de Matemáticas',
      recruiterInstitution: 'Puesto de trabajo para docente de primaria',
      initialDate: new Date(),
      endDate: new Date(),
      avalability: 'Available',
    },
  ];
  constructor(private router: Router){}
  verDetalles(id: string):void{
    this.router.navigate([`/assessment/view-assesment-process`,
    { idProcess: id },
   ])
  }
}
