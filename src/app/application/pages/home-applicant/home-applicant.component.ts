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
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css'],
  standalone:true,
  imports:[DatePipe,MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule,MatCardModule,NgFor],

})
export class HomeApplicantComponent {
  constructor(private dialog: MatDialog,private applicantService:ApplicantService) {}
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
      avalability:Availability.AVAILABLE,
      positionProfile:{
        id:1,
        course:{course:"Math"},
        experience:Experience.PRACTICER,
        modality:Modality.VIRTUAL,
        name:"aeaea",
        type:Type.PARTTIME
      }
  }

  jobOffers:JobOffer[]=[];

  ngOnInit():void{
    this.applicantService.getJobOffers().subscribe(
      data=>{
        this.jobOffers=data;
      }
    );
  }

  viewOffer(id:number):void{
    this.jobOfferExpanded=this.jobOffers[id];
  }

  apply():void{
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
       this.applicantService.applyToJobOffer(11,8)
        console.log('Aceptar');
      } else {
        
        console.log('Cancelar');
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
