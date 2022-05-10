import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registro: string = "Registro";
  form!: FormGroup;


  username: FormControl = new FormControl('', [
    Validators.required,Validators.maxLength(50)
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
  ]);
  apellidos: FormControl = new FormControl('', [
    Validators.required,
  ]);
  email: FormControl = new FormControl('', [
    Validators.required,
  ]);
  nombre: FormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: USUARIOSService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password,
      apellidos: this.apellidos,
      email: this.email,
      nombre: this.nombre
    });
  }



  onSubmitForm() {
    const user = { nombre: this.nombre.value, apellidos: this.apellidos.value, email: this.email.value, username: this.username.value, password: this.password.value };
    this.userService.createUser(user).subscribe(data => {
      this.router.navigateByUrl('/login');

    })
  }

}





