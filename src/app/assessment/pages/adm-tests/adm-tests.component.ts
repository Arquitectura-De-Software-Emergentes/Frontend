import { Component } from '@angular/core';
import { TestResponse } from '../../models/test';
import { AssessmentService } from '../../services/assessment.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/iam/services/auth.service';

@Component({
  selector: 'app-adm-tests',
  templateUrl: './adm-tests.component.html',
  styleUrls: ['./adm-tests.component.css']
})
export class AdmTestsComponent {
  showSpinner: boolean=false
  tests: TestResponse[] = [];
  idRecruiter: number=0;
  constructor(private assessmentService: AssessmentService, private router: Router, private authService: AuthService){}

  ngOnInit():void{
    this.idRecruiter=this.authService.idUser
    this.setAllTests()
  }

  setAllTests(): void{
    this.showSpinner=true;
    this.assessmentService.getTestsByRecruiter(this.idRecruiter).subscribe(
      tests=>{this.tests=tests; this.showSpinner=false}
    )
  }

  goCreate(): void{
    this.router.navigate([`assessment/tests/create`])
  }
}