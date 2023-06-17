import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { NgFor } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { JobOffer } from 'src/app/assessment/models/jobOffer';
import { Availability, Currency, Experience, Modality, Type } from 'src/app/shared/enums';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { DialogCreateOfferComponent } from 'src/app/UI/components/dialog-create-offer/dialog-create-offer.component';
import { ApplicantService } from '../../services/applicant.service';
import { JobOfferService } from 'src/app/job-offer/services/job-offer.service';


@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css'],
})
export class HomeApplicantComponent {
  constructor(private dialog: MatDialog,private jobOfferService:JobOfferService) {}
  modify:boolean=false;
  
  public modality = Modality;
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
    availability: Availability.AVAILABLE,
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
    this.jobOfferService.getJobOffers().subscribe(
      data=>{
        this.jobOffers=data;
        this.jobOfferExpanded=this.jobOffers[0]
      }
    );
  }

  viewOffer(id:number):void{
    this.jobOfferExpanded=this.jobOffers[id];
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
        this.jobOfferService.applyToJobOffer(this.jobOfferExpanded.id,1)
      }
      })
  }

  save():void{
    let dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {
        title: 'Are you sure?',
        accepted:false,
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log("aceptado?",result.accepted)
      console.log("Resultado?",result)
      if (result && result.accepted) {
        this.jobOffers[this.jobOfferExpanded!.id-1].title=this.jobOfferExpanded!.title;
        console.log('Aceptar');
      } else {
        this.jobOfferExpanded!.title=this.jobOffers[this.jobOfferExpanded!.id-1].title;
        console.log('Cancelar');
      }
    })
  }

  createOffer():void{
    this.dialog.open(DialogCreateOfferComponent,{
      data:'',
    });
  }

}
