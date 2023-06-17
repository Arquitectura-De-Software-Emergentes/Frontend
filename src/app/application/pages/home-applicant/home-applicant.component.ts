import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { JobOfferService } from 'src/app/job-offer/services/job-offer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { JobOffer } from 'src/app/job-offer/models/job-offer.model';
import { Availability, Currency, Experience, Modality, Type } from 'src/app/shared/enums';

@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css'],
})
export class HomeApplicantComponent {
  constructor(private dialog: MatDialog,private jobOfferService:JobOfferService,private _snackBar: MatSnackBar) {}
  modify:boolean=false;
  showSpinner: boolean=false;
  idApplicant: number=7;
  public availability = Availability;
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

  jobOffers:JobOffer[]=[];

  ngOnInit():void{
    this.setAllJobOffer()
  }

  setAllJobOffer(): void{
    this.showSpinner=true;
     this.jobOfferService.getJobOffers().subscribe(
      data=>{
        this.jobOffers=data;
        this.jobOfferExpanded=this.jobOffers[0];
        this.showSpinner=false;
      }
    );
  }

  apply():void{
    let dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '550px',
      data: {
        title: 'Are you sure to apply to this job offer?',
        accepted:false,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.jobOfferService.applyToJobOffer(this.jobOfferExpanded.id,this.idApplicant).subscribe({
          error:(error)=>{
            if(error.error.text){
              this._snackBar.openFromComponent(SnackBarComponent, {
                duration: 5000, data: {message: 'You successfully applied', status:'success'},
                panelClass: ['success-snackbar'], 
              });
            }
            if(error.error.message){
              this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 5000, data: {message: error.error.message, status:'warning'},
              panelClass: ['warning-snackbar'], 
            });
            }
          },
        })
      }
    })
  }
}
