import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  //Endpoint del Backend
  private backendURL: string = "http://localhost:3000/";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient,
    private cookies: CookieService
    ) { }
 

  findArticulosByCategoria(categoria: any): Observable<any> {
      console.log(categoria)
      var categorias = [
          {"categoria": categoria}
      ]
    return this.httpClient.post("http://localhost:3000/auth/getProductos",categorias);
  }

  findArticulosByCategoriasOrdenadores(categoria: any): Observable<any> {
    console.log(categoria)
    var categorias = [
        {"categoriasOrdenadores": categoria}
    ]
  return this.httpClient.post("http://localhost:3000/auth/getProductosCategorias",categorias);
}

  findCategorias(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/auth/getCategorias");
  }

  findCategoriasMoviles(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/auth/getCategorias2");
  }

  findArticulosByCategoriasMoviles(categoria: any): Observable<any> {
    console.log(categoria)
    var categorias = [
        {"categoriasOrdenadores": categoria}
    ]
  return this.httpClient.post("http://localhost:3000/auth/getProductosCategoriasMoviles",categorias);
}
  
  
}
