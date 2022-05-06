import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categoria-ordenadores',
  templateUrl: './categoria-ordenadores.component.html',
  styleUrls: ['./categoria-ordenadores.component.css']
})
export class CategoriaOrdenadoresComponent implements OnInit {

  isLogged: boolean = false;
  token: any;


  constructor(private router: Router,private userService: USUARIOSService) { }

  ngOnInit(): void {
    if(this.userService.getToken()){
      this.isLogged = true;
      this.token =  localStorage.getItem("sesion");
    }
  }

  navegarCategorias(){
    this.router.navigate(['/categoriasOrdenadores']);
  }
}
