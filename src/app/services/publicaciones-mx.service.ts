import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesMxService {
  public url: string;


  constructor(private _http: HttpClient, private _router:Router) {
    this.url = environment.urlMexico;
  }

  getPublicaciones(): Observable<any>{
    return this._http.get(`${this.url}/publicaciones`);
  }

  getPublicacion(slug: string): Observable<any>{
    return this._http.get(`${this.url}/publicaciones/?slug=${slug}/`, {
    }).pipe(
        map(res => res),
        catchError(err =>{
          switch(err.status){
            case 404:
              this._router.navigate(['/404']);
              break;
          }
          return throwError('Error en el servicio');
        })
    );
  }
}
