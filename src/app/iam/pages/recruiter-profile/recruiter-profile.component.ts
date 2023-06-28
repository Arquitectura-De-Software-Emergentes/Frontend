import { Component, OnInit } from '@angular/core';
import { RecruiterProfileService } from '../../services/recruiter-profile.service';
import { InstitutionalProfileResponse } from '../../models/recruiterprofileResponse';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit{
  loading: boolean = false
  inst:InstitutionalProfileResponse={
    name:'',
    description:'',
    urlWebPage:'',
    phoneNumber:'',
    image:'',
    address:''
  }
  constructor(private institutionalProfileService: RecruiterProfileService) {}
  ngOnInit(): void {
    this.setProfile();
  }
  setProfile() {
    this.loading=true;
    this.institutionalProfileService.getProfile(1);
  }

}
