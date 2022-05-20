import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaMovilesComponent } from './categoria-moviles/categoria-moviles.component';
import { CategoriaOrdenadoresComponent } from './categoria-ordenadores/categoria-ordenadores.component';
import { CategoriasMovilesComponent } from './categorias-moviles/categorias-moviles.component';
import { CategoriasOrdenadoresComponent } from './categorias-ordenadores/categorias-ordenadores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '',   redirectTo: '/', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'categoriaOrdenadores', component: CategoriaOrdenadoresComponent},
  {path: 'categoriaMoviles', component: CategoriaMovilesComponent},
  {path: 'categoriasOrdenadores', component: CategoriasOrdenadoresComponent},
  {path: 'categoriasMoviles', component: CategoriasMovilesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'lista', component: CategoriaListaComponent},
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'tienda', component: NavbarComponent },
  { path: 'products', component: ProductComponent }

 
];


export const appRoutes: any = RouterModule.forRoot(routes,{useHash: false,scrollPositionRestoration: 'enabled'})
