import { Component, Input } from '@angular/core';
import { TestResultResponse } from '../../services/assessment.service';

@Component({
  selector: 'app-dialog-results',
  templateUrl: './dialog-results.component.html',
  styleUrls: ['./dialog-results.component.css']
})
export class DialogResultsComponent {
  @Input() result: TestResultResponse={
    submitDate: new Date,
    score: 0,
    testId: 0,
    hasPassed: false
  }
}
