import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PagesMxService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.urlMexico;
  }
  getContactenos(): Observable<any>{
    return this._http.get(`${this.url}/pages/26/`);
  }
  getPensamientoCorporativo(): Observable<any>{
    return this._http.get(`${this.url}/pages/55/`);
  }
  getPoliticaGestionIntegral(): Observable<any>{
    return this._http.get(`${this.url}/pages/102/`)
  }
  getPruebasAutomatizacionControl(): Observable<any>{
    return this._http.get(`${this.url}/pages/115/`)
  }
  getSmartGrids(): Observable<any>{
    return this._http.get(`${this.url}/pages/134/`)
  }
  getServiciosEnergeticos(): Observable<any>{
    return this._http.get(`${this.url}/pages/156/`)
  }
  getPlaneacionProyectos(): Observable<any>{
    return this._http.get(`${this.url}/pages/175/`)
  }
  getEstudioSistemasElectricos(): Observable<any>{
    return this._http.get(`${this.url}/pages/193/`)
  }
}

