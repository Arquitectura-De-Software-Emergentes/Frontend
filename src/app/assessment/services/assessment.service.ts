import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionRequest, TestRequest, TestResponse, TestResult } from '../models/test';
import { Observable } from 'rxjs';
import { AssessmentDetails } from '../models/assessmentDetails';

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

  getAssessmentByIdJobOffer(idJobOffer:number){
    let url= this.apiUrl+`/${idJobOffer}?jobOfferId=${idJobOffer}`
    return this.http.get<AssessmentDetails>(url);
  }

  postVideoAssessment(feedback: string, idJobOffer: number){
    let aux: VideoPresentationRequest={feedback: feedback}
    let url= this.apiUrl+`${idJobOffer}/video-presentations?jobOfferId=${idJobOffer}`
    return this.http.post<string>(url, aux);
  }

  getTestResultByIdApplicant(idJobOffer: number, idApplicant: number){
    let url= this.apiUrl+`/${idJobOffer}/test-results/applicant/${idApplicant}?jobOfferId=${idJobOffer}&applicantId=${idApplicant}`
    return this.http.get<TestResultResponse>(url);
  }

  addTestJobOffer(idJobOffer: number, testId: number){
    let url=this.apiUrl+`/{jobOfferId}/test/{testId}?assessmentId=${idJobOffer}&testId=${testId}`;
    return this.http.put<string>(url,null)
  }
}


export interface VideoPresentationRequest{
  feedback:string
}

export interface TestResultResponse{
  submitDate: Date,
  score: number,
  testId: number,
  hasPassed: boolean
}


