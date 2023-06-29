import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatResponse, VideoPresentationAnalysisService } from '../../services/video-presentation-analysis.service';
import { VideoAnalisisResponse } from '../../models/assessment-response';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-send-video-presentation',
  templateUrl: './send-video-presentation.component.html',
  styleUrls: ['./send-video-presentation.component.css']
})
export class SendVideoPresentationComponent {
  constructor(private router: Router, private videoService: VideoPresentationAnalysisService, private activatedRoute: ActivatedRoute,
    private assessmentService: AssessmentService ){}
  showSpinner: boolean=false;
  idJobOffer: number=0;
  analisis: string=''
  file?: File;
  volver(){
    this.idJobOffer = +this.activatedRoute.snapshot.paramMap.get('idJobOffer')!;
    this.router.navigate([`assessment/adm-applications`])
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
    /*this.assessmentService.postVideoAssessment(this.analisis,this.idJobOffer).subscribe(
      respo=>this.volver()
    )*/
    this.volver()
  }
}
