import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  categorias: string = "CATEGORIAS";


  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  IrOrdenadores(){

    this.routes.navigateByUrl('/categoriaOrdenadores').then();
    
  }
  IrMoviles(){

    this.routes.navigateByUrl('/categoriaMoviles').then();

  }

}
