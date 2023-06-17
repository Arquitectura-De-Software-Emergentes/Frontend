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

@Component({
  selector: 'app-home-recruiter',
  templateUrl: './home-recruiter.component.html',
  styleUrls: ['./home-recruiter.component.css'],
  })
export class HomeRecruiterComponent {
  constructor(private dialog: MatDialog,private applicantService:ApplicantService) {}
  available: Availability=Availability.AVAILABLE;
  unavailable: Availability=Availability.UNAVAILABLE;
  modify:boolean=false;
  value="";
  name="Toshiro";
  userType="Applicant"
  jobOfferExpanded:JobOffer={
      id:1,
      recruiterId:1,
      title:'Math Teacher',
      description:'High School math teacher required late shift',
      initialDate:new Date(),
      endDate: new Date(),
      salary:{mount:10000,currency:Currency.PEN},
      maxApplications:30,
      numberApplications:10,
      availability:Availability.AVAILABLE,
      positionProfile:{
        id:1,
        course:{course:"Math"},
        experience:Experience.PRACTICE,
        modality:Modality.VIRTUAL,
        name:"aeaea",
        type:Type.PART_TIME
      }
  }

  jobOffers:JobOffer[]=[];

  ngOnInit():void{
    this.applicantService.getJobOffersByIdRecruiter(1).subscribe(
      data=>{
        this.jobOffers=data;
      }
    );
  }

  viewOffer(id:number):void{
    this.jobOfferExpanded=this.jobOffers[id];
  }
  updateAvailable(){
    
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
        this.jobOffers[this.jobOfferExpanded.id-1].title=this.jobOfferExpanded.title;
        console.log('Aceptar');
      } else {
        this.jobOfferExpanded.title=this.jobOffers[this.jobOfferExpanded.id-1].title;
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
