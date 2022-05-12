import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ArticulosService } from '../articulos.service';
import { USUARIOSService } from '../usuarios.service';
import { Pipe, PipeTransform } from "@angular/core";


@Component({
  selector: 'app-categoria-ordenadores',
  templateUrl: './categoria-ordenadores.component.html',
  styleUrls: ['./categoria-ordenadores.component.css']
})

export class CategoriaOrdenadoresComponent implements OnInit {

  isLogged: boolean = false;
  token: any;
  articulos: any;
  searchTerm$ = new Subject<string>();
  listFiltered = [];
  search: any;

  constructor(private router: Router, private userService: USUARIOSService, private articulosService: ArticulosService) { }

  ngOnInit(): void {
    if (this.userService.getToken()) {
      this.isLogged = true;
      this.token = localStorage.getItem("sesion");
    }

    const categoria = 1;
    this.articulosService.findArticulosByCategoria(categoria).subscribe(articulo => {

      this.articulos = articulo;
      this.listFiltered = this.articulos;
      console.log(this.articulos)

    });


  }


  navegarCategorias() {
    this.router.navigate(['/categoriasOrdenadores']);
  }
}
