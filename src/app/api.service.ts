import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


const headers = new HttpHeaders()
  .set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com')
  .set('X-RapidAPI-Key', '283251fff4msh97cf2cded7c8fc6p194a69jsneeca20c624e8')


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';

constructor(private httpClient: HttpClient) {
   }
  
  public getData(ID: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/' + ID, {'headers': headers});
  }
}
