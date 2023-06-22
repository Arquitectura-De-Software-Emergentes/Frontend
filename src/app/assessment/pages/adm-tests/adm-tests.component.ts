import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-tests',
  templateUrl: './adm-tests.component.html',
  styleUrls: ['./adm-tests.component.css']
})
export class AdmTestsComponent {
  tests: Test[] = [];
}

interface Test {
  numQuestions: string,
  minimunscore: number,
  questions: Question[]
}

interface Question{
  id:number,
  statement: string,
  options: Option[]
}

interface Option{
  id:number,
  response: string
}
