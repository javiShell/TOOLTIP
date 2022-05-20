import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ArticulosService } from '../articulos.service';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categoria-moviles',
  templateUrl: './categoria-moviles.component.html',
  styleUrls: ['./categoria-moviles.component.css']
})
export class CategoriaMovilesComponent implements OnInit {
  
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

    const categoria = 2;
    this.articulosService.findArticulosByCategoria(categoria).subscribe(articulo => {

      this.articulos = articulo;
      this.listFiltered = this.articulos;
      console.log(this.articulos)

    });

    this.articulosService.findCategoriasMoviles().subscribe(categoria => {
      this.categorias = categoria;
    })
  
  }

  ngOnChanges(){
    if(this.carrito){
      console.log(this.carrito)
    }
  }

  irCategorias($event: any){
    var nombre = ($event.target.innerHTML);

    if(nombre){
      this.articulosService.findArticulosByCategoriasMoviles(nombre).subscribe( articulo => {
        console.log(articulo);
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


  navegarCategorias(){
    this.router.navigate(['/categoriasMoviles']);
  }
}
