import { Component, OnInit } from '@angular/core';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  token: any;

  isLogged: boolean = false;
  constructor(private userService: USUARIOSService) { }

  ngOnInit(): void {
    if(this.userService.getToken()){
      this.isLogged = true;
      this.token =  localStorage.getItem("sesion");

    }
  }

}
