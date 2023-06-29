import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationResponse } from 'src/app/application/models/application';
import { ApplicationService } from 'src/app/application/services/application.service';

@Component({
  selector: 'app-assessment-applications',
  templateUrl: './assessment-applications.component.html',
  styleUrls: ['./assessment-applications.component.css']
})
export class AssessmentApplicationsComponent implements OnInit {
  id: number = 0;
  appications: ApplicationResponse[]=[]
  constructor(private route: ActivatedRoute,private router: Router, private applicationService: ApplicationService) {}
  
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('idJobOffer')!;
    this.applicationService.getApplicationsByIdJobOffer(this.id).subscribe(res=>{console.log(res);this.appications=res})
  }
  volver(){
    this.router.navigate([`assessment`])
  }

  showResult(){
    //this.
  }
}
