import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tooltip';
  ingresado: boolean = false;

  constructor(private router: Router){

  }

  ingresar(){
    this.router.navigateByUrl('/login').then(
       );
       this.ingresado = true
  }


}
