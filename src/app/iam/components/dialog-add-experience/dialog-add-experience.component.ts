import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobExperienceInformation } from '../../models/jobExperienceInformation';

@Component({
  selector: 'app-dialog-add-experience',
  templateUrl: './dialog-add-experience.component.html',
  styleUrls: ['./dialog-add-experience.component.css']
})
export class DialogAddExperienceComponent {
  newJobExperience?: JobExperienceInformation={position:'',company:'', time:''};
}
