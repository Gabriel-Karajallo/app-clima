import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url =  'https://api.openweathermap.org/data/2.5/weather?&appid='
  key: string = 'f52831dffe4b051553d91e46e9e6c0d9'

  constructor( private http: HttpClient ) { }

  getclima( ciudad: string ): Observable<any>  {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL)

  }
}
