import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios';
import { USUARIOSService } from '../usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: boolean = false;
  isLogged: boolean = false;
  titulo: string = "TOOLTIP";
  eslogan: string = "Encuentra justo lo que necesitas";
  resultado!: string;
  form!: FormGroup;
  errors = [];
  noSesion: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: USUARIOSService) { 
    
  }

  username: FormControl = new FormControl('', [
    Validators.required,Validators.maxLength(50)
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
  ]);
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password, 
    });
    this.login = true;
  }


  onSubmitForm() {
    const user = { username: this.username.value, password: this.password.value };

    this.userService.login(user).subscribe(data => {
     
        console.log(data);
        this.userService.setToken(data.toString());
        localStorage.setItem("sesion", JSON.parse(JSON.stringify(this.username.value)))
        this.router.navigateByUrl('/categorias');
   
    });

  if (localStorage.getItem("sesion")){
    this.noSesion = true;
    console.log(this.noSesion)
  }
  }

  




  invitado() {

    this.isLogged = false;
    this.router.navigate(['/categorias'])


  }

  registro() {

    this.router.navigate(['/register'])

  }



}
