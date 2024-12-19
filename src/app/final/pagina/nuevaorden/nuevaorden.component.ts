import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { OrdenService } from '../../../core/services/orden.service';

@Component({
  selector: 'app-nuevaorden',
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevaorden.component.html',
  styleUrl: './nuevaorden.component.scss'
})
export default class NuevaordenComponent {

  orden = {
    id_orden: null,
    id_mesa: null,
    id_platillo: null,
    id_cliente: null,
    cantidad: 0,
  };

  constructor(private ordenService: OrdenService,  private authService: AuthService, private router: Router){}

  guardarOrden(): void {
    this.ordenService.agregarOrden(this.orden).subscribe({
      next: (res) => {
        console.log('Orden guardado exitosamente', res);
        this.router.navigate(['/orden']);
      },
      error: (err) => {
        console.error('Error al guardar orden', err);
        alert('Error al ingresar la orden. Por favor, revise que todos los campos sean correctos.');
      },
    });
  }


  goToMeseros(): void {
    this.router.navigate(['/meseros']);  
  }

  goToPrincipal(): void {
    this.router.navigate(['/principal']); 
  }

  logout(): void{
    this.authService.logout();
  }

  cancelar(): void {
    this.router.navigate(['/orden']); // Redirige a la página de meseros
  }

  goToCategoria(): void {
    this.router.navigate(['/categoria']);  // Redirige a la página de Meseros
  }

  goToPlatillo(): void {
    this.router.navigate(['/platillo']);  // Redirige a la página de Meseros
  }

  goToCliente(): void {
    this.router.navigate(['/cliente']);  // Redirige a la página de Meseros
  }

  goToOrden(): void {
    this.router.navigate(['/orden']);  // Redirige a la página de Meseros
  }
}
