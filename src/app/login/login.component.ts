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


  isLogged: boolean = false;
  titulo: string = "TOOLTIP";
  eslogan: string = "Encuentra justo lo que necesitas";
  resultado!: string;
  form!: FormGroup;
  errors = [];
  noSesion: boolean = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: USUARIOSService) { 
    
  }

  username: FormControl = new FormControl('', [
    Validators.required,
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
  ]);
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password, 
    });
  }


  onSubmitForm() {
    const user = { username: this.username.value, password: this.password.value };

    this.userService.login(user).subscribe(data => {
      try {
        console.log(data);
        this.userService.setToken(data.toString());
        localStorage.setItem("sesion", JSON.stringify(this.username.value))
        this.router.navigateByUrl('/categorias');
        this.noSesion = false;
      } catch (e) {
        console.error(e);
      }
    });
  }





  invitado() {

    this.router.navigate(['/categorias'])

  }

  registro() {

    this.router.navigate(['/register'])

  }



}
