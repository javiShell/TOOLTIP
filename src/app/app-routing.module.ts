import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaMovilesComponent } from './categoria-moviles/categoria-moviles.component';
import { CategoriaOrdenadoresComponent } from './categoria-ordenadores/categoria-ordenadores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'categoriaOrdenadores', component: CategoriaOrdenadoresComponent},
  {path: 'categoriaMoviles', component: CategoriaMovilesComponent}
 
];


export const appRoutes: any = RouterModule.forRoot(routes,{useHash: false,scrollPositionRestoration: 'enabled'})
