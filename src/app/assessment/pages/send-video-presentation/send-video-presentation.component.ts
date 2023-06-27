import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatResponse, VideoPresentationAnalysisService } from '../../services/video-presentation-analysis.service';
import { VideoAnalisisResponse } from '../../models/assessment-response';

@Component({
  selector: 'app-send-video-presentation',
  templateUrl: './send-video-presentation.component.html',
  styleUrls: ['./send-video-presentation.component.css']
})
export class SendVideoPresentationComponent {
  constructor(private router: Router, private videoService: VideoPresentationAnalysisService ){}
  showSpinner: boolean=false;
  analisis: string=''
  file?: File;
  volver(){
    this.router.navigate([`assessment`])
  }

  transcription(event:any):void{
    this.showSpinner=true
    this.file=event.target.files[0]
    this.videoService.extractText(this.file!).subscribe(resp=>{
      this.analisis=(resp as VideoAnalisisResponse).text;
      this.getAnalisis()
    }
    )
  }

  getAnalisis():void{
    this.videoService.getScore(this.analisis).subscribe(resp=>{
      this.showSpinner=false
      console.log(resp);
      this.analisis=(resp as ChatResponse).choices[0].message.content
    })
  }

  send():void{
    
  }
}
