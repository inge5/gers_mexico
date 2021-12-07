import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeMxService {

  public base: string;
  public url: string;
  constructor(public _http: HttpClient){
      this.base = environment.baseMexico;
      this.url = environment.urlMexico;
  }

  getHome(): Observable<any>{
    return this._http.get(`${this.base}/pages/397/`);
  }

  getProyects(): Observable<any>{
    return this._http.get(`${this.url}/proyectos?per_page=40`);
  }
}
