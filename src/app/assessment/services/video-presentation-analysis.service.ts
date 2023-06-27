import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class VideoPresentationAnalysisService {
  readonly configuration = new Configuration({
    apiKey: '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',
});
readonly openai = new OpenAIApi(this.configuration);
apiURL: string  = 'https://api.openai.com/v1/audio/transcriptions'

//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
constructor(private http: HttpClient) {}
title = 'api-angular';

extractText(file: File) {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + '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');
  const formData = new FormData();
    formData.append("file", file);
    formData.append("model", "whisper-1");
  const body = {
    'file': file,
    'model': 'whisper-1',
    'response_format': 'text'
  };
  return this.http.post(this.apiURL, formData, { headers: headers });
}

}
