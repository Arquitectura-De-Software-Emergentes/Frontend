import { Component } from '@angular/core';
import { DialogComponentComponent } from 'src/app/UI/components/dialog-component/dialog-component.component';
import { JobOfferService } from '../../services/job-offer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateOfferComponent } from 'src/app/UI/components/dialog-create-offer/dialog-create-offer.component';

@Component({
  selector: 'app-form-job-offer',
  templateUrl: './form-job-offer.component.html',
  styleUrls: ['./form-job-offer.component.css'],
})
export class FormJobOfferComponent {
  constructor(
    private dialog: MatDialog,
    private applicantService: JobOfferService
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

  createOffer(): void {
    this.dialog.open(DialogCreateOfferComponent, {
      data: '',
    });
  }
}
