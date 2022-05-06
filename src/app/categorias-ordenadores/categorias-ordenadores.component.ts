import { Component, OnInit } from '@angular/core';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categorias-ordenadores',
  templateUrl: './categorias-ordenadores.component.html',
  styleUrls: ['./categorias-ordenadores.component.css']
})
export class CategoriasOrdenadoresComponent implements OnInit {

  isLogged: boolean = false;
  token: any;

  constructor(private userService: USUARIOSService) { }

  ngOnInit(): void {
    if(this.userService.getToken()){
      this.token =  localStorage.getItem("sesion");
      this.isLogged = true;
    }
  }

}
