import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { HeaderComponent } from './header/header.component';
import { CategoriaOrdenadoresComponent } from './categoria-ordenadores/categoria-ordenadores.component';
import { CategoriaMovilesComponent } from './categoria-moviles/categoria-moviles.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriasComponent,
    HeaderComponent,
    CategoriaOrdenadoresComponent,
    CategoriaMovilesComponent,
    CategoriaListaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    appRoutes
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
