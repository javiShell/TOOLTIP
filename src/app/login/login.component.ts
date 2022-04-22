import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  titulo: string = "TOOLTIP";
  eslogan: string = "Encuentra justo lo que necesitas";

  loginForm: FormGroup = new FormGroup(
    {
    usuario: new FormControl(),
    contraseña: new FormControl()
    }
  );


  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){

  }

  invitado(){

    this.router.navigate(['/categorias'])

  }

}
