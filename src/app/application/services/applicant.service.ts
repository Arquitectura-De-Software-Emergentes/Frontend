import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from 'src/app/job-offer/models/job-offer.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  readonly apiUrl: string = 'https://ec2-3-95-18-5.compute-1.amazonaws.com:8080/job-offers/'
  constructor(private http:HttpClient) { }

  getJobOffers():Observable<JobOffer[]>{
    return this.http.get<JobOffer[]>(this.apiUrl);
  }

  getJobOffersByIdRecruiter(id: number):Observable<JobOffer[]> {
    let url= this.apiUrl+`recruiter/${id}`
    return this.http.get<JobOffer[]>(url);
  }
}
