import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input()
token: any;

  @Input()
  isLogged: boolean | undefined;

  constructor(private routes: Router, private cookies:  CookieService) { }

  ngOnInit(): void {
    console.log(this.token)

  }
  lista(){
    this.routes.navigateByUrl('/lista').then();
  }
  logout(){
    this.routes.navigate(['/login'])
    localStorage.clear()
    sessionStorage.clear()
    this.cookies.deleteAll();
  }

}
