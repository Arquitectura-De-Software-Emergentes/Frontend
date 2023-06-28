import { Component } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { QuestionResponse, TestResponse } from '../../models/test';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/UI/components/snack-bar/snack-bar.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-submit-test',
  templateUrl: './submit-test.component.html',
  styleUrls: ['./submit-test.component.css']
})
export class SubmitTestComponent {
  idtest: number=0;
  idJobOffer: number=1;
  idApplicant: number=1;
  actualIndexQuestion: number=0;
  showSpinner: boolean=false;
  resultado: boolean=false;
  showResult: boolean=false
  test: TestResponse={
    id: 0,
    title: '',
    numQuestions: 0,
    minimunScore: 0,
    questions: []
  }
  actualQueston: QuestionResponse={
    id: 0,
    statement: '',
    options: [{
      id: 0,
      response: ''
    }],
    responseId: 0,
    points: 0
  }
  constructor(private assessmentService: AssessmentService, private _snackBar: MatSnackBar, 
    private activatedRoute: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.idtest = +this.activatedRoute.snapshot.paramMap.get('idTest')!;
    this.setTest()
    this.assessmentService.getTestByJobOffer(this.idJobOffer).subscribe(
      response=>{console.log(response)}
    )
  }
  setTest(){
    this.showSpinner=true;
    this.assessmentService.getTestById(this.idtest).subscribe(
      response=>{console.log(response); this.test=response;this.showSpinner=false} 
    )
  }
  
  volver(){
    this.router.navigate([`assessment/adm-applications`])
  }

  send(){
    this.assessmentService.submitTest(this.idJobOffer,this.idApplicant,this.test).subscribe({
      next: r=>{this.resultado=r.hasPassed; this.showResult=true;
          this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000, data: {message: 'The test was sent successfully', status:'success'},
        panelClass: ['success-snackbar'], 
      });},
      error: ()=>{
        this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000, data: {message: "Failed to send results", status:'warning'},
        panelClass: ['warning-snackbar'], 
      })}
    }
    )
  }
}
