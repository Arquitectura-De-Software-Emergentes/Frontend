import { Component } from '@angular/core';
import { OptionRequest } from '../../models/test';

@Component({
  selector: 'app-dialog-options',
  templateUrl: './dialog-options.component.html',
  styleUrls: ['./dialog-options.component.css']
})
export class DialogOptionsComponent {
  options: OptionRequest[]=[]
  newOption: OptionRequest={
    response: '',
    isCorrect: false
  }

  addOptionList(){
    let option: OptionRequest={
      response: this.newOption.response,
      isCorrect: this.newOption.isCorrect
    }
    this.options.push(option)
  }
}
