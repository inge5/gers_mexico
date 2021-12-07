import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  url_mexico: string = `${environment.domain}/mexico/wp-json/wp/v2`;

  constructor(private http: HttpClient) {
   }
getCapacitacionesMexico(){
  return this.http.get(`${this.url_mexico}/capacitaciones`);
}
getCategoriaCapacitacionesMexico(){
  return this.http.get(`${this.url_mexico}/categorias_capacitaciones`)
}
getCategoriaCapacitacionesIdMexico(id: number){
  return this.http.get(`${this.url_mexico}/categorias_capacitaciones/${id}`);
}
getCapacitacionesIdMexico(id: number){
 return this.http.get(`${this.url_mexico}/capacitaciones/${id}`);
}
}
