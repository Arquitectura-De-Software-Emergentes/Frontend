import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/job-offer/models/job-offer.model';
import { Availability, Currency, Experience, Modality, Type } from 'src/app/shared/enums';
import { JobOfferService } from 'src/app/job-offer/services/job-offer.service';
import { AuthService } from 'src/app/iam/services/auth.service';

@Component({
  selector: 'app-adm-assessment-recruiter',
  templateUrl: './adm-assessment-recruiter.component.html',
  styleUrls: ['./adm-assessment-recruiter.component.css'],
})
export class AdmAssessmentRecruiterComponent {
  panelOpenState = false;
  showSpinner: boolean=false
  public availability = Availability;
  jobOffers: JobOffer[] = []
  idRecruiter: number=0
  constructor(private router: Router, private jobOfferService: JobOfferService, 
    private authService: AuthService){}
 ngOnInit(){
  this.idRecruiter=this.authService.idUser;
  this.setAllJobOfferByRecruiter()
 }
  setAllJobOfferByRecruiter(){
    this.showSpinner=true;
    this.jobOfferService.getJobOffersByIdRecruiter(this.idRecruiter).subscribe(
      data=>{
        this.jobOffers=data;
        this.showSpinner=false;
      }
    )
  }

  verApplications(id: number):void{
    this.router.navigate([`assessment/applications`,
    { idJobOffer: id },
   ])
  }
}
