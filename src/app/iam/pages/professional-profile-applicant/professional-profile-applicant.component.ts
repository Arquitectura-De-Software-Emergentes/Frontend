import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddExperienceComponent } from '../../components/dialog-add-experience/dialog-add-experience.component';
import { JobExperienceInformation } from '../../models/jobExperienceInformation';
import { ProfessionalProfileService } from '../../services/professional-profile.service';
import { ProfessionalProfileResponse } from '../../models/professionalProfileResponse';
import { ProfessionalProfileReq } from '../../models/professionalProfileReq';

@Component({
  selector: 'app-professional-profile-applicant',
  templateUrl: './professional-profile-applicant.component.html',
  styleUrls: ['./professional-profile-applicant.component.css'],
})
export class ProfessionalProfileApplicantComponent implements OnInit{
  loading: boolean = false
  editInformation: boolean=false;
  profileInformation: ProfessionalProfileResponse ={
    academicInformation: {
      school: '',
      specialty: '',
      reference: ''
    },
    contactInformation: {
      phone: '',
      email: '',
      mobilePhone: ''
    },
    personalInformation: {
      name: '',
      lastname: '',
      dni: '',
      birthDate: new Date,
      address: ''
    },
    jobExperienceInformations: []
  };
  constructor(public dialog: MatDialog,
    private professionalProfileService: ProfessionalProfileService) {}

  ngOnInit(): void {
     this.setProfile()
  }

  setProfile(){
    this.loading=true
    this.professionalProfileService.getProfile(8)
      .subscribe({
        next: profile => {
          this.loading=false;
          console.log(profile)
          this.profileInformation=profile
        }
      })
  }

  updateProfile(){
    this.loading=true
    this.professionalProfileService.updateProfile(this.profileInformation,8)
      .subscribe({
        next: profile => {
          this.loading=false
          console.log('success')
          this.setProfile();this.editInformation=false
        }
      })
  }

  addExperience(obj: any){
    this.professionalProfileService.postExperience(obj)
      .subscribe({
        next: () => {
          console.log('success');
          this.setProfile()
        }
      })
  }

  openDialogAddExperience() {
    const dialogRef = this.dialog.open(DialogAddExperienceComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let aux: JobExperienceInformation ={
        ...result,
        applicantProfileId: 8
      }
      this.addExperience(aux)
      }
    });
  }

  saveInformation(){
    this.updateProfile()
  }
}
