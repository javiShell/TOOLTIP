import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  username!: string;
  password!: string;


  constructor(private formBuilder: FormBuilder,private router: Router,  private userService: USUARIOSService) { }

  ngOnInit(): void {
  }

  
  
  onSubmitForm(){
    const user = {username: this.username, password: this.password};
    this.userService.login(user).subscribe( data => {
      try{
      console.log(data);
      this.userService.setToken(data.toString());
      localStorage.setItem("sesion",user.username)
      this.router.navigateByUrl('/categorias');
      }catch(e){
          console.error(e);
          
      }
    });
  }
  
   
   
 

  invitado(){

    this.router.navigate(['/categorias'])

  }

  registro(){

    this.router.navigate(['/register'])

  }



}
