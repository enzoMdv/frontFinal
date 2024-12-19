import { Component } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  dni: string = '';
  contraseha: string = '';

  constructor(private authService: AuthService, private router: Router){

  }
  
  login(): void{
    this.authService.login(this.dni, this.contraseha).subscribe(
      {
        next: ()=> this.router.navigate(['/principal']),
        error: (err) => console.error('Login failed', err)
      }
    )
  }

    // Método para redirigir al formulario de nuevo mesero
    registro(): void {
      this.router.navigate(['/registromesero']); // Redirige al formulario para crear
    }

    goToLogin(): void {
      this.router.navigate(['/login']);  // Redirige a la página de Meseros
    }

}
