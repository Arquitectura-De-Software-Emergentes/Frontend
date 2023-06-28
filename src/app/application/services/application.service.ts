import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, ApplicationResponse } from '../models/application';
import { ErrorResponse } from 'src/app/job-offer/models/error-response';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  readonly apiUrl: string =
    'https://teacher-finder.up.railway.app/api/v1/applications';
  constructor(private http: HttpClient) {}

  getApplicationsByIdApplicant(idApplicant: number) {
    let url = this.apiUrl + `/applicants/${idApplicant}`;
    return this.http.get<Application[]>(url);
  }

  getApplicationsByIdJobOffer(idJobOffer: number){
    let url = this.apiUrl + `/job-offers/${idJobOffer}`;
    return this.http.get<ApplicationResponse[]>(url);
  }

  applyToJobOffer(jobOfferId:number,applicantId:number){
    let url= this.apiUrl+`/apply/job-offers/${jobOfferId}/aplicants/${applicantId}`
    return this.http.post<string|ErrorResponse>(url,null);
  }
}


