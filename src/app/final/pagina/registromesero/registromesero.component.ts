import { Component } from '@angular/core';

//
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { MeseroService } from '../../../core/services/mesero.service';

@Component({
  selector: 'app-registromesero',
  imports: [FormsModule, CommonModule],
  templateUrl: './registromesero.component.html',
  styleUrl: './registromesero.component.scss'
})
export default class RegistromeseroComponent {

  mesero = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    dni: '',
    contraseha: '',
  };

  constructor(private meseroService: MeseroService,  private authService: AuthService, private router: Router){}

  goToMeseros(): void {
    this.router.navigate(['/meseros']);  // Redirige a la página de Meseros
  }

  goToPrincipal(): void {
    this.router.navigate(['/principal']);  // Redirige a la página de Meseros
  }

  logout(): void{
    this.authService.logout();
  }

    // Método para guardar el mesero
    guardarMesero(): void {
      this.meseroService.agregarMesero(this.mesero).subscribe({
        next: (res) => {
          console.log('Mesero registrado exitosamente', res);
          this.router.navigate(['/login']); // Redirigir a la página de meseros
        },
        error: (err) => {
          console.error('Error al guardar mesero', err);
        },
      });
    }

// Método para cancelar
cancelar(): void {
  this.router.navigate(['/meseros']); // Redirige a la página de meseros
}

goToCategoria(): void {
  this.router.navigate(['/categoria']);  // Redirige a la página de Meseros
}

goToPlatillo(): void {
  this.router.navigate(['/platillo']);  // Redirige a la página de Meseros
}

goToLogin(): void {
  this.router.navigate(['/login']);  // Redirige a la página de Meseros
}

goToCliente(): void {
  this.router.navigate(['/cliente']);  // Redirige a la página de Meseros
}

goToOrden(): void {
  this.router.navigate(['/orden']);  // Redirige a la página de Meseros
}

}
