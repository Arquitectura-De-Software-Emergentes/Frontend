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
    title: 'Docente de primaria para curso de Matemáticas',
    recruiterInstitution: 'Puesto de trabajo para docente de primaria',
    initialDate: new Date(),
    endDate: new Date(),
    avalability: Availability.AVAILABLE,
    assessmentStages: [
      { activities: [{name: 'Video Presentación'},{name:'Evaluación de razonamiento matemático'}], title: 'Fase 1' },
      { activities: [{name:'Entrevista'}], title: 'Fase 2' },
    ],
    positionProfile:{
      id:1,
      course:{course:"Math"},
      experience:Experience.PRACTICER,
      modality:Modality.VIRTUAL,
      name:"aeaea",
      type:Type.PARTTIME
    }
  };
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('idProcess')!;
  }
  volver(){
    this.router.navigate([`recruiter/assessments`])
  }
}
