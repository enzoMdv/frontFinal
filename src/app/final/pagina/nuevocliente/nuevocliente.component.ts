import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { ClienteService } from '../../../core/services/cliente.service';

@Component({
  selector: 'app-nuevocliente',
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevocliente.component.html',
  styleUrl: './nuevocliente.component.scss'
})
export default class NuevoclienteComponent {

  cliente = {
    id_cliente: null,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    telefono: '',
    dni: '',
  };

  constructor(private clienteService: ClienteService,  private authService: AuthService, private router: Router){}

  // Método para guardar el mesero
  guardarCliente(): void {
    this.clienteService.agregarCliente(this.cliente).subscribe({
      next: (res) => {
        console.log('Mesero guardado exitosamente', res);
        this.router.navigate(['/cliente']); // Redirigir a la página de meseros
      },
      error: (err) => {
        console.error('Error al guardar mesero', err);
      },
    });
  }


  goToMeseros(): void {
    this.router.navigate(['/meseros']);  // Redirige a la página de Meseros
  }

  goToPrincipal(): void {
    this.router.navigate(['/principal']);  // Redirige a la página de Meseros
  }

  logout(): void{
    this.authService.logout();
  }

  cancelar(): void {
    this.router.navigate(['/meseros']); // Redirige a la página de meseros
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
