import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionRequest, QuestionRequest, TestRequest, TestResponse } from '../../models/test';
import { DialogOptionsComponent } from '../../components/dialog-options/dialog-options.component';
import { MatDialog } from '@angular/material/dialog';
import { AssessmentService } from '../../services/assessment.service';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/iam/services/auth.service';

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
  idRecruiter: number=1;
  constructor(private router: Router, private _snackBar: MatSnackBar,public dialog: MatDialog, public authService: AuthService,
    private assessmentService: AssessmentService) {}
    
  ngOnInit(){
    this.idRecruiter=this.authService.idUser;
  }
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

  dialogOptions(i: number, options: OptionRequest[]){
    const dialogRef = this.dialog.open(DialogOptionsComponent);
    if(options.length)dialogRef.componentInstance.options = options;
    dialogRef.afterClosed().subscribe(result => {if(result)this.questions[i].options=result});
  }

  create(){
    this.newTest.recruiterId=this.idRecruiter
    this.assessmentService.createTest(this.newTest).subscribe({
      next: (response)=>{
        for (let index = 0; index < this.questions.length; index++) {
          this.assessmentService.addQuestionTest((response as TestResponse).id, this.questions[index])
          .pipe(finalize(() => {
            this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 5000, data: {message: 'You created the test successfully', status:'success'},
              panelClass: ['success-snackbar'], 
            });
          this.volver()
          })).subscribe(response=>{ true}) 
        }
      }, 
      error:()=>{
        this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000, data: {message: "Failed to create test", status:'warning'},
        panelClass: ['warning-snackbar'], 
      })}
    })
  }
}
