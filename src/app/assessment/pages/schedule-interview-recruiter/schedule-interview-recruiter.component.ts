import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogScheduleInterviewComponent } from '../../components/dialog-schedule-interview/dialog-schedule-interview.component';

@Component({
  selector: 'app-schedule-interview-recruiter',
  templateUrl: './schedule-interview-recruiter.component.html',
  styleUrls: ['./schedule-interview-recruiter.component.css']
})
export class ScheduleInterviewRecruiterComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogScheduleInterviewComponent);

    dialogRef.afterClosed().subscribe(result => {});
  }
}
