import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { JobOffer } from 'src/app/job-offer/models/job-offer.model';
import { JobOfferService } from 'src/app/job-offer/services/job-offer.service';
@Component({
  selector: 'app-apply-job-offer',
  templateUrl: './apply-job-offer.component.html',
  styleUrls: ['./apply-job-offer.component.css']
})
export class ApplyJobOfferComponent {
  @Input() idApplicant!: number;
  @Input() jobOffer!: JobOffer;
  
 constructor(private dialog: MatDialog,private jobOfferService:JobOfferService,private _snackBar: MatSnackBar){}

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
        this.jobOfferService.applyToJobOffer(this.jobOffer.id,this.idApplicant).subscribe({
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
