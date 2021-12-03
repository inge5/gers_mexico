import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  url_mexico: string = "https://gers.com.co/backend/mexico/wp-json/wp/v2";

  constructor(private http: HttpClient) {
   }
//Mexico

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
