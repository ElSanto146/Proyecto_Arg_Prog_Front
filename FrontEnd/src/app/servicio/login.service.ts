import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //El método login() es el que se va a comunicar con la api rest
  login(credentials:LoginRequest):Observable<any>{
    return this.http.get('http://localhost:8080/persona');

  }

 

}
