import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Api_capitali';
  cId:string;
  success = false;
  noFound = false;
  vuoto = true;
  language:string = "it";
  lan = true;


  risposta= {
    "data": {
      "capital": "string",
      "code": "string",
      "callingCode": "string",
      "currencyCodes": [
          "string"
      ],
      "flagImageUri": "string",
      "name": "string",
      "numRegions": 123,
      "wikiDataId": "string"
  }
  };

  constructor(private apiService: ApiService) {
  }

  languageChanger(value:string) {
    this.language=value;
  }

  public getData() {
    this.apiService.getData(this.cId, this.language)
    .subscribe(
      (response) => {
        console.log("response received")
        this.risposta = response;
      },
      (error) => {
        console.error('response failed with error')
        this.noFound = true;
        this.success = false;
      },
      () => {
        console.log('Request completed')
        this.success = true;
        this.noFound = false;
      }
    )
  }
  
}
