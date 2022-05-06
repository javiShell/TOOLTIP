import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categoria-moviles',
  templateUrl: './categoria-moviles.component.html',
  styleUrls: ['./categoria-moviles.component.css']
})
export class CategoriaMovilesComponent implements OnInit {
  token: any;

  isLogged: boolean = false;
  constructor(private router: Router, private userService: USUARIOSService) { }

  ngOnInit(): void {
    if(this.userService.getToken()){
      this.isLogged = true;
      this.token =  localStorage.getItem("sesion");

    }
  }


  navegarCategorias(){
    this.router.navigate(['/categoriasMoviles']);
  }
}
