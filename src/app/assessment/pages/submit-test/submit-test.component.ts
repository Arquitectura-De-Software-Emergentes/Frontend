import { Component } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { QuestionResponse, TestResponse } from '../../models/test';

@Component({
  selector: 'app-submit-test',
  templateUrl: './submit-test.component.html',
  styleUrls: ['./submit-test.component.css']
})
export class SubmitTestComponent {
  idtest: number=18;
  actualIndexQuestion: number=0
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
  constructor(private assessmentService: AssessmentService){}
  ngOnInit(){
    this.setTest()
  }
  setTest(){
    this.assessmentService.getTestById(this.idtest).subscribe(
      response=>{console.log(response); this.test=response} 
    )
  }
  volver(){

  }

  console(){
    console.log(this.test)
  }
}
