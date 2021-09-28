import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusClService {
  public menu: string;

  constructor(public _http: HttpClient) { 
    this.menu = GLOBAL.menuChile;
  }

  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${this.menu}/menus/menu-principal`);
  }
  getFooter(): Observable<any>{
    return this._http.get(`${this.menu}/menus/24`);
  }
  getFooterContacto(): Observable<any>{
    return this._http.get(`${this.menu}/menus/25`);
  }
  getFooterCertificados(): Observable<any>{
    return this._http.get(`${this.menu}/menus/26`);
  }
}
