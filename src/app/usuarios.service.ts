import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class USUARIOSService {

  //Endpoint del Backend
  private backendURL: string = "http://localhost:3000/addUsers";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient,
    private cookies: CookieService
    ) { }
 
  //Methods
  findAllUsers(): Observable<Usuarios[]>{
    return this.httpClient.get<Usuarios[]>(`${this.backendURL}`);
  }

  login(user: any): Observable<any> {
    console.log(user);
    return this.httpClient.post("http://localhost:3000/auth/signin", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  //POST
  createUser(user: Usuarios): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, user);
  }
}
