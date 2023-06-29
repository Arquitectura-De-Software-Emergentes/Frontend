import { Component } from '@angular/core';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { JobOfferService } from '../../services/job-offer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateOfferComponent } from 'src/app/UI/components/dialog-create-offer/dialog-create-offer.component';
import { JobOffer } from '../../models/job-offer.model';
import { Currency, Experience, Modality, Type } from 'src/app/shared/enums';
import { Router } from '@angular/router';
import { AssessmentService } from 'src/app/assessment/services/assessment.service';
import { AuthService } from 'src/app/iam/services/auth.service';
import { TestResponse } from 'src/app/assessment/models/test';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-job-offer',
  templateUrl: './form-job-offer.component.html',
  styleUrls: ['./form-job-offer.component.css'],
})
export class FormJobOfferComponent {
  tests: TestResponse[]=[];
  selectedTestId: number=0;
  monedaSeleccionada:string='';
  valor=localStorage.getItem("recruiterId");
  aEntero=this.valor!=null?+this.valor:0;
  
  showSpinner: boolean=false;

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
    private dialog: MatDialog, private assessmentService: AssessmentService,
    private applicantService: JobOfferService, private auth: AuthService,
    private router:Router, private _snackBar: MatSnackBar
  ) {}

  ngOnInit(){
    this.showSpinner=true
    this.assessmentService.getTestsByRecruiter(this.auth.idUser).subscribe(
      tests=>{this.tests=tests;this.showSpinner=false;}
    )
  }

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
  volver(){
    this.router.navigate([`home`])
  }
  createJobOffer(): void {
    this.showSpinner=true;
    this.applicantService.createJobOffer(this.newJobOffer).subscribe(r=>{
      this.assessmentService.addTestToJobOffer(this.selectedTestId,r.id ).subscribe(
        {
          error:error=>{if(error.error.text){
            this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 5000, data: {message: 'You successfully create job offer with test', status:'success'},
              panelClass: ['success-snackbar'], 
            }); this.showSpinner=false; this.volver();
          }
          if(error.error.message){
            this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 5000, data: {message: error.error.message, status:'warning'},
            panelClass: ['warning-snackbar'], 
          });
          }}
        }
        
        )
    });
  }

  cancel():void{
    this.router.navigate([`home`])
  }
}
