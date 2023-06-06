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

@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css'],
  standalone:true,
  imports:[DatePipe,MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule,MatCardModule,NgFor],
})
export class HomeApplicantComponent {
  value="";
  name="Toshiro";
  userType="Applicant"
  jobOfferName="";

  jobOffers:JobOffer[]=[
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    
  ]
  
}
