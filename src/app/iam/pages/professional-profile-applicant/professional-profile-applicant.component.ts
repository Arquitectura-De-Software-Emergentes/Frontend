import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddExperienceComponent } from '../../components/dialog-add-experience/dialog-add-experience.component';
import { JobExperienceInformation } from '../../models/jobExperienceInformation';
import { ProfessionalProfileService } from '../../services/professional-profile.service';
import { ProfessionalProfileResponse } from '../../models/professionalProfileResponse';
import { ProfessionalProfileReq } from '../../models/professionalProfileReq';
import { CVResponse } from '../../models/cvResponse';
import { AuthService, InfoSession } from '../../services/auth.service';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-professional-profile-applicant',
  templateUrl: './professional-profile-applicant.component.html',
  styleUrls: ['./professional-profile-applicant.component.css'],
})
export class ProfessionalProfileApplicantComponent implements OnInit{
  loading: boolean = false;
  user?: InfoSession;
  applicantId: number=1;
  cv: CVResponse ={
    cv: ''
  }
  editInformation: boolean=false;
  editCV: boolean=false
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
  constructor(public dialog: MatDialog, private authService: AuthService,private _snackBar: MatSnackBar,
    private professionalProfileService: ProfessionalProfileService) {}

  ngOnInit(): void {
    this.user=this.authService.infoUser
    this.applicantId=this.authService.idUser;
    console.log(this.authService.idUser)
     this.setProfile();
     this.setCV()
  }

  setProfile(){
    this.loading=true
    this.professionalProfileService.getProfile(this.applicantId)
      .subscribe(
        {
        next: profile => {
          this.loading=false;
          this.profileInformation=profile
        },
        error: r=>{
          this.loading=false;
        }
      }
      
      )
  }

  setCV(){
    this.professionalProfileService.getCV(this.applicantId)
      .subscribe({
        next: cv => {
          this.cv=cv;
        }
      })
  }

  saveCV(){
    this.professionalProfileService.updateCV(this.cv,this.applicantId)
    .subscribe({
      next: ()=> {
          this.editCV=false
        this.setProfile()
      }
    })
  }
  updateProfile(){
    this.loading=true;
    let profile: ProfessionalProfileReq={
      academicInformation: this.profileInformation.academicInformation,
      contactInformation: this.profileInformation.contactInformation,
      personalInformation: this.profileInformation.personalInformation
    }
    this.professionalProfileService.updateProfile(profile,this.applicantId)
      .subscribe(
        {
        next: profile => {
          this.loading=false
          this.setProfile();this.editInformation=false;
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 5000, data: {message: 'You updated the information successfully', status:'success'},
            panelClass: ['success-snackbar'], 
          });
        }
      })
  }

  addExperience(obj: any){
    this.professionalProfileService.postExperience(obj)
      .subscribe({
        next: () => {
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
        applicantProfileId: this.applicantId
      }
      this.addExperience(aux)
      }
    });
  }

  saveInformation(){
    this.updateProfile()
  }
}
