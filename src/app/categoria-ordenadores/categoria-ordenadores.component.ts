import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ArticulosService } from '../articulos.service';
import { USUARIOSService } from '../usuarios.service';
import { Pipe, PipeTransform } from "@angular/core";
import { getLocaleFirstDayOfWeek } from '@angular/common';


@Component({
  selector: 'app-categoria-ordenadores',
  templateUrl: './categoria-ordenadores.component.html',
  styleUrls: ['./categoria-ordenadores.component.css']
})

export class CategoriaOrdenadoresComponent implements OnInit, OnChanges {

  isLogged: boolean = false;
  token: any;
  articulos: any;
  categorias: any;
  searchTerm$ = new Subject<string>();
  listFiltered = [];
  search: any;
  carrito: any = [];
  cerrado: boolean = false;
  data: boolean = false;

  constructor(private router: Router, private userService: USUARIOSService, private articulosService: ArticulosService) {

  }

  ngOnInit(): void {
    if (this.userService.getToken()) {
      this.isLogged = true;
      this.token = localStorage.getItem("sesion");
    }

    const categoria = 1;
    this.articulosService.findArticulosByCategoria(categoria).subscribe(articulo => {

      this.articulos = articulo;
      this.listFiltered = this.articulos;

    });

    this.articulosService.findCategorias().subscribe(categoria => {
      this.categorias = categoria;
    })

  }

  ngOnChanges() {
    if (this.carrito) {
    }
  }

  irCategorias($event: any) {
    var nombre = ($event.target.innerHTML);

    if (nombre) {
      this.articulosService.findArticulosByCategoriasOrdenadores(nombre).subscribe(articulo => {
        console.log(articulo)
        this.articulos = articulo

      })
    }

  }

  add($event: any) {

    this.carrito.push($event.nombre);
    this.data = true;
    let recoveredData = localStorage.getItem('carrito')
    if (recoveredData == null) {
      localStorage.setItem('carrito', JSON.stringify(this.carrito))
    } else {
      let data = JSON.parse(recoveredData)
      data = this.carrito;
      localStorage.setItem('carrito', JSON.stringify(data))
    }


  }

  delete($event: any) {

    let localList = localStorage.getItem('carrito');
    if (localList != null) {
      let list = JSON.parse(localList);



      for (let index in list) {
        if ($event.nombre == list[index]) {
          list.splice(index, 1)
        }
      }

      localStorage.setItem("carrito", JSON.stringify(list));
    }

  }


  navegarCategorias() {
    this.router.navigate(['/categoriasOrdenadores']);
  }
}
