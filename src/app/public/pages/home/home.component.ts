import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { JobOfferService } from 'src/app/job-offer/services/job-offer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { JobOffer } from 'src/app/job-offer/models/job-offer.model';
import { Availability, Currency, Experience, Modality, Type } from 'src/app/shared/enums';
import { Router } from '@angular/router';
import { VideoPresentationAnalysisService } from 'src/app/assessment/services/video-presentation-analysis.service';
import { AuthService } from 'src/app/iam/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private dialog: MatDialog,private jobOfferService:JobOfferService,private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router, private videoService: VideoPresentationAnalysisService) {}
  showSpinner: boolean=false;
  idUser: number=0;
  isApplicant: boolean=true;
  public availability = Availability;
  username:string|null='';
  value="";
  name="Toshiro";
  userType="Applicant"
  jobOfferExpanded:JobOffer={
    id: 0,
    recruiterId: 0,
    title: '',
    description: '',
    initialDate: new Date,
    endDate: new Date,
    salary: {
      mount: 0,
      currency: Currency.PEN
    },
    maxApplications: 0,
    numberApplications: 0,
    availability: 'AVAILABLE',
    positionProfile: {
      id: 0,
      course: {
        course: ''
      },
      experience: Experience.PRACTICE,
      modality: Modality.VIRTUAL,
      name: '',
      type: Type.PART_TIME
    }
  }
  file?: File;
  jobOffers:JobOffer[]=[];

  ngOnInit():void{
    this.idUser=this.authService.idUser;
    if(this.authService.infoUser.user.role=='APPLICANT'){
      localStorage.setItem("applicantId",this.authService.infoUser.user.userId.toString())
      localStorage.setItem("username",this.authService.infoUser.user.username)
      this.username=localStorage.getItem("username");
      this.isApplicant=true;
    }
    else {
      localStorage.setItem("recruiterId",this.authService.infoUser.user.userId.toString())
      localStorage.setItem("username",this.authService.infoUser.user.username)
      this.username=localStorage.getItem("username");
      this.isApplicant=false;
    }
    this.setAllJobOffer()
  }

  transcription(event:any):void{
    this.file=event.target.files[0]
    this.videoService.extractText(this.file!).subscribe(resp=>console.log(resp)
    )
  }

  setAllJobOffer(): void{
    this.showSpinner=true;
    if(this.isApplicant){
        this.jobOfferService.getJobOffers().subscribe(
        data=>{
          this.jobOffers=data;
          this.jobOfferExpanded=this.jobOffers[0];
          this.showSpinner=false;
        }
      );
    }else{
      this.jobOfferService.getJobOffersByIdRecruiter(this.idUser).subscribe(
        data=>{
          this.jobOffers=data;
          if(this.jobOffers.length){
          this.jobOfferExpanded=this.jobOffers[0];
          }
          this.showSpinner=false;
        }
      );
    }
  }

  goEditJobOffer(){
    localStorage.setItem("jobOfferId",this.jobOfferExpanded.id.toString())
    this.router.navigate([`job-offer/edit`])
  }

  goToCreate(){
    this.router.navigate([`job-offer/create`])
  }
}
