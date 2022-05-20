import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  nombreArticulo: any[] = [];
  token: any;
  isLogged: boolean = false;
  //carrito: any;
  vacio: boolean = true;
  articulos: any = [
    
  ];
  productList: any = [
   ];
  cartProductList: any = [];

  
  
  constructor(private userService: USUARIOSService) {

   }

   
  ngOnInit(): void {
    if(this.userService.getToken()){
      this.isLogged = true;
      this.token =  localStorage.getItem("sesion");

    }

    let recoveredData = localStorage.getItem('carrito');
    if(recoveredData!=null){
      let data = JSON.parse(recoveredData);
      this.productList.push(data);
      
    }

    
    console.log(this.productList)
  }

}

   
  /*var carro = localStorage.getItem('carrito');
   if(carro){
     console.log(localStorage.getItem('carrito'))
    //this.articulos.push(this.carrito)
    var array = JSON.parse(carro)
    //this.articulos = array;
   
    this.vacio = false;

 var nuevosValores = JSON.parse(carro);
 array = array.concat(nuevosValores);      
    
   
   }
   var nuevoArray = JSON.stringify(array);
   localStorage.setItem("valores",nuevoArray);
   this.articulos.push(nuevoArray)
   console.log(this.articulos)
   
  }
  */
  
  




