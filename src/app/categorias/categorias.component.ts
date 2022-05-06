import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  isLogged: boolean = false;
  categorias: string = "CATEGORIAS";
  sesion = [];
  token: any;


  constructor(private routes: Router, private userService: USUARIOSService, private cookies: CookieService) { }

  ngOnInit(): void {
    if(this.userService.getToken()){
     this.token =  localStorage.getItem("sesion");
      console.log(this.token)
      this.isLogged = true;
    }
  }

  IrOrdenadores(){

    this.routes.navigateByUrl('/categoriaOrdenadores').then();
    
  }
  IrMoviles(){

    this.routes.navigateByUrl('/categoriaMoviles').then();

  }

}
