import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddExperienceComponent } from '../../components/dialog-add-experience/dialog-add-experience.component';
import { JobExperienceInformation } from '../../models/jobExperienceInformation';

@Component({
  selector: 'app-professional-profile-applicant',
  templateUrl: './professional-profile-applicant.component.html',
  styleUrls: ['./professional-profile-applicant.component.css'],
})
export class ProfessionalProfileApplicantComponent {
  jobExperiences: JobExperienceInformation[] = [
    { company: 'compañia', position: 'profesor', time: '2 años' },
    { company: 'compañia', position: 'profesor', time: '2 años' },
  ];
  editInformation: boolean=false;
  constructor(public dialog: MatDialog) {}
  openDialogAddExperience() {
    const dialogRef = this.dialog.open(DialogAddExperienceComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      console.log(result);
      //post job experience here
    });
  }

  saveInformation(){
    this.editInformation=false
  }
}
