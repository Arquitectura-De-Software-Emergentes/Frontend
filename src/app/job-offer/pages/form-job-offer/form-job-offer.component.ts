import { Component } from '@angular/core';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { JobOfferService } from '../../services/job-offer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateOfferComponent } from 'src/app/UI/components/dialog-create-offer/dialog-create-offer.component';
import { JobOffer } from '../../models/job-offer.model';
import { Currency, Experience, Modality, Type } from 'src/app/shared/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-job-offer',
  templateUrl: './form-job-offer.component.html',
  styleUrls: ['./form-job-offer.component.css'],
})
export class FormJobOfferComponent {
  
  monedaSeleccionada:string='';
  valor=localStorage.getItem("recruiterId");
  aEntero=this.valor!=null?+this.valor:0;
  
  

  newJobOffer:JobOffer={
    id:0,
    recruiterId:this.aEntero,
    title:'',
    description:'',
    initialDate:'',
    endDate:'',
    salary:{
      mount:0,
      currency:Currency.PEN
    },
    maxApplications:0,
    numberApplications:0,
    availability:'AVAILABLE',
    positionProfile:{
      id:0,
      name:'',
      course:{
        course:''
      },
      modality:Modality.BLENDED,
      experience:Experience.LESSTHAN3YEARS,
      type:Type.FULL_TIME
    }
  }
  constructor(
    private dialog: MatDialog,
    private applicantService: JobOfferService,
    private router:Router
  ) {}


  save(): void {
    let dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {
        title: 'Are you sure?',
        accepted: false,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
    /*  console.log('aceptado?', result.accepted);
      console.log('Resultado?', result);
      if (result && result.accepted) {
        this.jobOffers[this.jobOfferExpanded.id - 1].title =
          this.jobOfferExpanded.title;
        console.log('Aceptar');
      } else {
        this.jobOfferExpanded.title =
          this.jobOffers[this.jobOfferExpanded.id - 1].title;
        console.log('Cancelar');
      }*/
    });
  }
  onMonedaSeleccionadaChange():void{
    this.newJobOffer.salary.currency = this.monedaSeleccionada === 'Soles' ? this.newJobOffer.salary.currency=Currency.PEN : this.newJobOffer.salary.currency=Currency.USD;
  }

  createJobOffer(): void {
    this.applicantService.createJobOffer(this.newJobOffer).subscribe();
  }

  cancel():void{
    this.router.navigate([`home`])
  }
}
