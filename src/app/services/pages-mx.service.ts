import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesMxService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.urlMexico;
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
  
  /**** Representaciones ****/ 
  getNeplan(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/266`)
  }
  getBeckwithElectronic(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/296`)
  }
  getXGSLab(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/307`)
  }
  /***************************/
  getProyectos(): Observable<any>{
    return this._http.get(`${this.url}/proyectos?per_page=40`);
  }

  /**** Servicios ****/
  getEstudioSistemasElectricos(): Observable<any>{
    return this._http.get(`${this.url}/servicios/371/`)
  }
  getServiciosEnergeticos(): Observable<any>{
    return this._http.get(`${this.url}/servicios/373/`)
  }
  getPruebasAutomatizacionControl(): Observable<any>{
    return this._http.get(`${this.url}/servicios/374/`)
  }
  getDisenoIngenieria(): Observable<any>{
    return this._http.get(`${this.url}/servicios/375/`)
  }
  getPlaneacionProyectos(): Observable<any>{
    return this._http.get(`${this.url}/servicios/376/`)
  }
  getInterventoriaAsesoria(): Observable<any>{
    return this._http.get(`${this.url}/servicios/377/`)
  }
  getSmartGrids(): Observable<any>{
    return this._http.get(`${this.url}/servicios/378/`)
  }
  
  /***************************/
  /**** Página Proyectos *****/
  getProyectosPagina(): Observable<any>{
    return this._http.get(`${this.url}/pages/334`)
  }
  /*************************/
  getAcuerdosInternacionales(): Observable<any>{
    return this._http.get(`${this.url}/pages/619`)
  }
}

