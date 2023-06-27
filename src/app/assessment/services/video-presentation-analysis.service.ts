import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root',
})
export class VideoPresentationAnalysisService {
  apiURL: string = 'https://api.openai.com/v1/audio/transcriptions';

  //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
  constructor(private http: HttpClient) {}
  title = 'api-angular';

  extractText(file: File) {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + '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'
    );
    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', 'whisper-1');
    const body = {
      file: file,
      model: 'whisper-1',
      response_format: 'text',
    };
    return this.http.post(this.apiURL, formData, { headers: headers });
  }

  getScore(text: string){
    let apiChat='https://api.openai.com/v1/chat/completions'
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + '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'
    );
    const formData = new FormData();
    let mess: MessageRequest={
      role: 'user',
      content: `Haz un analisis del siguiente speech para postulacion de trabajo: "${text}" 
      menciona los puntos positivos y negativos de la presentacion para postulacion de trabajo muy brevemente`
    }
    let arr: MessageRequest[]=[];
    arr.push(mess)
    const body = {
      model: 'gpt-3.5-turbo',
      messages: arr,
    };
    return this.http.post(apiChat, body, { headers: headers });
  }
}

interface MessageRequest{
  role: string;
  content: string
}

export interface ChatResponse{
  choices: ChoiceResponse[]
}

interface MessageResponse{
  content: string
}

interface ChoiceResponse{
  message: MessageResponse
}