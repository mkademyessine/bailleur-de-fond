import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  link = 'https://restcountries.com/v2/all';

  constructor(private http:HttpClient) { }

  getcountry(){
    return this.http.get(this.link)
  }
}
