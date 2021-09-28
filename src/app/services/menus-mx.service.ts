import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusMxService {
  public menu: string;

  constructor(public _http: HttpClient) { 
    this.menu = GLOBAL.menuMexico;
  }

  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${this.menu}/menus/menu-principal`);
  }

  getMenuFooter(): Observable<any>{
    return this._http.get(`${this.menu}/menus/26`);
  }
  getMenuFooterContactenos(): Observable<any>{
    return this._http.get(`${this.menu}/menus/27`);
  }
  getMenuFooter2(): Observable<any>{
    return this._http.get(`${this.menu}/menus/28`);
  }
}
