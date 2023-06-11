import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessionalProfileResponse } from '../models/professionalProfileResponse';
import { Observable } from 'rxjs';
import { ProfessionalProfileReq } from '../models/professionalProfileReq';

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
}
