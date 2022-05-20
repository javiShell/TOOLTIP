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
import { FooterComponent } from './footer/footer.component';
import { CategoriasOrdenadoresComponent } from './categorias-ordenadores/categorias-ordenadores.component';
import { CategoriasMovilesComponent } from './categorias-moviles/categorias-moviles.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './register/register.component';
import { FiltroPipe } from './filtro.pipe';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriasComponent,
    HeaderComponent,
    CategoriaOrdenadoresComponent,
    CategoriaMovilesComponent,
    CategoriaListaComponent,
    FooterComponent,
    CategoriasOrdenadoresComponent,
    CategoriasMovilesComponent,
    PersonalizacionComponent,
    RegisterComponent,
    FiltroPipe,
    CartComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    appRoutes
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
