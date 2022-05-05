import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-moviles',
  templateUrl: './categoria-moviles.component.html',
  styleUrls: ['./categoria-moviles.component.css']
})
export class CategoriaMovilesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCategorias(){
    this.router.navigate(['/categoriasMoviles']);
  }
}
