import { Component } from '@angular/core';
import { AuthService } from 'src/app/iam/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isApplicant: boolean = true;

  constructor(private authService: AuthService){}

  ngOnInit(){
    if(this.authService.infoUser.user.role=='APPLICANT') this.isApplicant=true;
    else this.isApplicant=false;
  }
}
