import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessionalProfileResponse } from '../models/professionalProfileResponse';
import { Observable } from 'rxjs';
import { ProfessionalProfileReq } from '../models/professionalProfileReq';
import { JobExperienceInformation } from '../models/jobExperienceInformation';
import { CVResponse } from '../models/cvResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalProfileService {

  readonly apiUrl: string = 'http://ec2-3-95-18-5.compute-1.amazonaws.com:8080/api/v1/' + 'applicants/';
  constructor(private http: HttpClient) {}

  getProfile(id: number): Observable<ProfessionalProfileResponse> {
    let url= this.apiUrl+`${id}/profile`
    return this.http.get<ProfessionalProfileResponse>(url);
  }

  updateProfile(profile: ProfessionalProfileReq, id: number): Observable<ProfessionalProfileResponse> {
    let url= this.apiUrl+`${id}/profile`
    return this.http.put<ProfessionalProfileResponse>(url,profile);
  }

  postExperience(jobExperience: JobExperienceInformation): Observable<number> {
    let url= this.apiUrl+`experience`
    return this.http.post<number>(url, jobExperience);
  }

  getCV(id: number): Observable<CVResponse> {
    let url= this.apiUrl+`${id}/cv`
    return this.http.get<CVResponse>(url);
  }

  updateCV(cv: CVResponse, id: number): Observable<void> {
    let url= this.apiUrl+`${id}/cv`
    return this.http.put<void>(url,cv);
  }
}
