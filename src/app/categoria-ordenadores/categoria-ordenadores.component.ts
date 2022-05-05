import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-ordenadores',
  templateUrl: './categoria-ordenadores.component.html',
  styleUrls: ['./categoria-ordenadores.component.css']
})
export class CategoriaOrdenadoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCategorias(){
    this.router.navigate(['/categoriasOrdenadores']);
  }
}
