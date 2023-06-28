import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstitutionalProfileResponse } from '../models/recruiterprofileResponse';

@Injectable({
  providedIn: 'root'
})
export class RecruiterProfileService {

  readonly apiUrl: string = 'https://ec2-3-95-18-5.compute-1.amazonaws.com:8080/api/v1/' + 'institutionprofile/';
  constructor(private http: HttpClient) {}

  getProfile(id:number):Observable<InstitutionalProfileResponse>{
    let url=this.apiUrl+`${id}/profile`
    return this.http.get<InstitutionalProfileResponse>(url);
  }
}
