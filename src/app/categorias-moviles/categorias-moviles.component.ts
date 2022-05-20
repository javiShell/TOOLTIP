import { Component, OnInit } from '@angular/core';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categorias-moviles',
  templateUrl: './categorias-moviles.component.html',
  styleUrls: ['./categorias-moviles.component.css']
})
export class CategoriasMovilesComponent implements OnInit {

  isLogged: boolean = false;
  token: any;

  constructor(private userService: USUARIOSService) { }

  ngOnInit(): void {
    if(this.userService.getToken()){
      this.isLogged = true;
      this.token =  localStorage.getItem("sesion");
    }
  }

  

}
