import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { USUARIOSService } from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registro: string = "Registro";
  nombre!: string;
  apellidos!: string;
  email!: string;
  username!: string;
  password!: string;


  constructor(private formBuilder: FormBuilder, private router: Router, private userService: USUARIOSService) { }

  ngOnInit(): void {
  }



  onSubmitForm() {
    const user = { nombre: this.nombre, apellidos: this.apellidos, email: this.email, username: this.username, password: this.password };
    this.userService.createUser(user).subscribe(data => {
      this.router.navigateByUrl('/login');

    })
  }

}





