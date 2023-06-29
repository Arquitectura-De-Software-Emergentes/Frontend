import { Component } from '@angular/core';
import { JobOfferService } from '../../services/job-offer.service';
import { JobOffer } from '../../models/job-offer.model';
import { Currency, Experience, Modality, Type } from 'src/app/shared/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form-job-offer',
  templateUrl: './edit-form-job-offer.component.html',
  styleUrls: ['./edit-form-job-offer.component.css']
})
export class EditFormJobOfferComponent {
  monedaSeleccionada:string='';
  jobOfferToEdit:JobOffer={
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
  constructor(private jobOfferService:JobOfferService,private router:Router){}
ngOnInit():void{
  let id=localStorage.getItem("jobOfferId");
  let intOfferId=id!=null?+id:0;
  this.jobOfferService.getJobOfferById(intOfferId).subscribe(
    data=>{
      this.jobOfferToEdit=data;
    }
  )
}

onMonedaSeleccionadaChange():void{
  this.jobOfferToEdit.salary.currency = this.monedaSeleccionada === 'Soles' ? this.jobOfferToEdit.salary.currency=Currency.PEN : this.jobOfferToEdit.salary.currency=Currency.USD;
}

cancel():void{
  this.router.navigate([`home`])
}

save():void{
  
}

}
