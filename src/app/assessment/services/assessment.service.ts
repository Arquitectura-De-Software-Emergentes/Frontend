import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionRequest, TestRequest, TestResponse } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  readonly apiUrl: string = 'https://teacher-finder.up.railway.app/api/v1/assessments'
  constructor(private http:HttpClient) { }

  getTestsByRecruiter(idRecruiter:number):Observable<TestResponse[]>{
    let url= this.apiUrl+`/recruiter/${idRecruiter}/tests?recruiterId=${idRecruiter}`
    return this.http.get<TestResponse[]>(url);
  }

  createTest(test: TestRequest): Observable<TestResponse>{
    let url= this.apiUrl+`/tests`
    return this.http.post<TestResponse>(url, test);
  }

  addQuestionTest(idTest: number, question: QuestionRequest): Observable<string>{
    let url= this.apiUrl+`/tests/${idTest}/questions?testId=${idTest}`
    return this.http.post<string>(url, question);
  }

  getTestById(idTest: number){
    let url= this.apiUrl+`/tests/${idTest}?testId=${idTest}`
    return this.http.get<TestResponse>(url);
  }

  submitTest(idJoboffer: number, idApplicant: number, test: TestResponse){
    let url= this.apiUrl+`/${idJoboffer}/tests/applicant/${idApplicant}/submit?jobOfferId=${idJoboffer}&applicantId=${idApplicant}`
    return this.http.post<TestResult>(url,test.questions);
  }

  getTestByJobOffer(idJobOffer: number){
    let url= this.apiUrl+`/${idJobOffer}/tests?jobOfferId=${idJobOffer}`
    return this.http.get<any>(url);
  }

  addTestToJobOffer(idTest: number, idAssessment: number){
    let url= this.apiUrl+`/${idAssessment}/test/${idTest}?assessmentId=${idAssessment}&testId=${idTest}`
    return this.http.put<string>(url, null);
  }
}


export interface TestResult{
  hasPassed: boolean
}
