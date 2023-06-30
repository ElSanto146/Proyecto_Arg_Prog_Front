import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicio/login.service';
import { LoginRequest } from 'src/app/servicio/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  //Método que se llama cuando click botón Iniciar Sesión, verifica que el form sea válido
  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest );
      this.router.navigateByUrl('/inicio'); //Después de click devuelve al '/inicio'
      this.loginForm.reset(); //resetea el formulario
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

}
