import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationResponse } from 'src/app/application/models/application';
import { ApplicationService } from 'src/app/application/services/application.service';
import { AssessmentService } from '../../services/assessment.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogResultsComponent } from '../../components/dialog-results/dialog-results.component';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assessment-applications',
  templateUrl: './assessment-applications.component.html',
  styleUrls: ['./assessment-applications.component.css'],
})
export class AssessmentApplicationsComponent implements OnInit {
  idJobOffer: number = 0;
  appications: ApplicationResponse[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,private _snackBar: MatSnackBar,
    private assessmentService: AssessmentService,
    public dialog: MatDialog,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    this.idJobOffer = +this.route.snapshot.paramMap.get('idJobOffer')!;
    this.applicationService
      .getApplicationsByIdJobOffer(this.idJobOffer)
      .subscribe((res) => {
        this.appications = res;
      });
  }
  volver() {
    this.router.navigate([`assessment`]);
  }

  showResult(idApplicant: number) {
    this.assessmentService
      .getTestResultByIdApplicant(this.idJobOffer, idApplicant)
      .subscribe({
        next: (p) => {
          const dialogRef = this.dialog.open(DialogResultsComponent, {
            width: '300px',});
          dialogRef.componentInstance.result = p;
        },
        error:()=>{
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 5000, data: {message: 'There is no results', status:'warning'},
            panelClass: ['warning-snackbar'], 
        })
      }})
  }
}
