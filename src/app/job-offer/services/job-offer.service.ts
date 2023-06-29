import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from 'src/app/job-offer/models/job-offer.model';
import { ErrorResponse } from '../models/error-response';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  id=localStorage.getItem("jobOfferId");
  intOfferId=this.id!=null?+this.id:0;
  readonly apiUrl: string = 'http://ec2-3-95-18-5.compute-1.amazonaws.com:8080/api/v1/job-offers'
  constructor(private http:HttpClient) { }

  getJobOffers():Observable<JobOffer[]>{
    return this.http.get<JobOffer[]>(this.apiUrl);
  }

  getJobOffersByIdRecruiter(id: number):Observable<JobOffer[]> {
    console.log("IDESITO",id)
    let url= this.apiUrl+`/recruiter/${id}`
    return this.http.get<JobOffer[]>(url);
  }

  getJobOfferById(id:number):Observable<JobOffer>{
    let url=this.apiUrl+`/${id}`
    return this.http.get<JobOffer>(url);
  }

  createJobOffer(jobOffer:JobOffer):Observable<JobOffer>{
    console.log("obtuveEsto",jobOffer)
    return this.http.post<JobOffer>(this.apiUrl,jobOffer);
  }

  editEnabledJobOffer(jobOffer:JobOffer):Observable<JobOffer>{
    let url=this.apiUrl+`/${this.intOfferId}/enable`
    return this.http.put<JobOffer>(url,jobOffer)
  }
  editDisabledJobOffer(jobOffer:JobOffer):Observable<JobOffer>{
    let url=this.apiUrl+`/${this.intOfferId}/disable`
    return this.http.put<JobOffer>(url,jobOffer)
  }
  
  /*applyToJobOffer(jobOfferId:number,applicantId:number):Observable<string|ErrorResponse>{
    let url= this.apiUrl+`/${jobOfferId}/apply/${applicantId}`
    return this.http.post<string|ErrorResponse>(url,null);
  }*/
}
