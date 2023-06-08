import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-schedule-interview',
  templateUrl: './dialog-schedule-interview.component.html',
  styleUrls: ['./dialog-schedule-interview.component.css']
})
export class DialogScheduleInterviewComponent {
  selected: Date | null = new Date();
}
