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
import { Availability } from 'src/app/shared/enums';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';

@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css'],
  standalone:true,
  imports:[DatePipe,MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule,MatCardModule,NgFor],
})
export class HomeApplicantComponent {
  constructor(private dialog: MatDialog) {}
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
      salary:10000,
      maxApplications:30,
      numberApplications:10,
      avalability:Availability.AVAILABLE,
  }

  jobOffers:JobOffer[]=[
    {
      id:1,
      recruiterId:1,
      title:'Software Architecture Teacher',
      description:'From Upc, needs to delegate  task to students',
      initialDate:new Date(),
      endDate: new Date(),
      salary:10000,
      maxApplications:30,
      numberApplications:10,
      avalability:Availability.AVAILABLE,
    },
    {
      id:2,
      recruiterId:1,
      title:'Vallejo Prompter',
      description:'Do not use chat gpt to apply for this job, automated disqualified',
      initialDate:new Date(),
      endDate: new Date(),
      salary:10000,
      maxApplications:30,
      numberApplications:10,
      avalability:Availability.AVAILABLE,
    },
    {
      id:3,
      recruiterId:1,
      title:'Want a Job?',
      description:'Yes I want bro',
      initialDate:new Date(),
      endDate: new Date(),
      salary:10000,
      maxApplications:30,
      numberApplications:10,
      avalability:Availability.AVAILABLE,
    },
    {
      id:4,
      recruiterId:1,
      title:'Math Teacher',
      description:'High School math teacher required late shift',
      initialDate:new Date(),
      endDate: new Date(),
      salary:10000,
      maxApplications:30,
      numberApplications:10,
      avalability:Availability.AVAILABLE,
    },
    {
      id:5,
      recruiterId:1,
      title:'Science Teacher',
      description:'Proffesional graduated with 10 years experience working on NASA',
      initialDate:new Date(),
      endDate: new Date(),
      salary:10,
      maxApplications:15,
      numberApplications:10,
      avalability:Availability.AVAILABLE,
    },
    
  ]
  

  viewOffer(id:number):void{
    let jobOfferExpanded:JobOffer={
      id:this.jobOffers[id].id,
      recruiterId:this.jobOffers[id].recruiterId,
      title:this.jobOffers[id].title,
      description:this.jobOffers[id].description,
      initialDate:this.jobOffers[id].initialDate,
      endDate: this.jobOffers[id].endDate,
      salary:this.jobOffers[id].salary,
      maxApplications:this.jobOffers[id].maxApplications,
      numberApplications:this.jobOffers[id].numberApplications,
      avalability:this.jobOffers[id].avalability,
  };

  this.jobOfferExpanded=jobOfferExpanded;
   
  }

  save():void{
    console.log("nuevo valor",this.jobOfferExpanded.title)
  
    let dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {
        title: 'Advertencia',
        message: 'Se modificará, está seguro?',
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
}
