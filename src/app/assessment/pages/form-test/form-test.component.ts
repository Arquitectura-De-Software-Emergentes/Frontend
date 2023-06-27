import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionRequest, TestRequest } from '../../models/test';
import { DialogOptionsComponent } from '../../components/dialog-options/dialog-options.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {
  newTest: TestRequest={
    title: '',
    recruiterId: 0,
    minimunScore: null
  }
  questions: QuestionRequest[]=[]
  newQuestion: QuestionRequest={
    statement: '',
    options: [],
    points: null
  }
  constructor(private router: Router, public dialog: MatDialog) {}
  volver(){
    this.router.navigate([`assessment/tests`])
  }

  addQuestionList(){
    let question: QuestionRequest={
      statement: this.newQuestion.statement,
      options: [],
      points: this.newQuestion.points
    }
    this.questions.push(question)
  }
  dialogOptions(){
    const dialogRef = this.dialog.open(DialogOptionsComponent);

    dialogRef.afterClosed().subscribe(result => {});
  }
}
