import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private router: Router, private authService: AuthService){}

  login() {
    let user: User={
      username: this.username,
      password: this.password
    }
    this.authService.login(user).subscribe(respo=>{
      this.authService.setUser(respo);
        if(respo.user.role=='RECRUITER') this.router.navigate([`iam/recruiter-profile`])
        if(respo.user.role=='APPLICANT')this.router.navigate([`iam/professional-profile`])
    })
  }

  register(){
    this.router.navigate([`register`])
  }
}
