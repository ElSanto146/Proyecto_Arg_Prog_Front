
//Crear un servicio (empiza con Mayúscula)
//Si el CLI no deja poner el --skip-tests Hacerlo con schematic
//Tercero: ir al .ts del componente

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url='http://localhost:8080/habilidad/'

  constructor(private http:HttpClient) { } //minuto 26:25. En el minuto 30:43 se vé como poder reemplazar un palabra en todo el código

  //trae en un array todas las habilidades (objetos) de la bbdd
  public ver(): Observable<Habilidad[]>{ //trae el modelo Habilidad desde model  
    return this.http.get<Habilidad[]>(this.url + 'ver');
  }

  //crear una habilidad (objeto del tipo Habilidad)
  public save(habilidad: Habilidad):Observable<any>{
    return this.http.post<any>(this.url + 'new', habilidad);
  }

  //Editar un objeto del tipo Habilidad
  public editar(id: number, habilidad: Habilidad): Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}`, habilidad)
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`); 
  }

  public detalle(id: number): Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url + `detalle/${id}`);
  } 


}
