import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../../core/services/cliente.service'; // Servicio que conecta con la API
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export default class ClienteComponent implements OnInit{
  listaClientes: any[] = []; // Lista de clientes que viene de la API

  constructor(private clienteService: ClienteService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  // Método para obtener todos los clientes
  obtenerClientes(): void {
    this.clienteService.obtenerTodos().subscribe(
      (data) => {
        this.listaClientes = data; // Almacena los datos en la lista
      },
      (error) => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  // Método para editar un cliente
  editarcliente(id: number): void {
    this.router.navigate(['/editarcliente', id]); // Redirige al componente de edición
  }

  // Método para eliminar un cliente
  eliminarCliente(id: number): void {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.eliminar(id).subscribe(
        () => {
          alert('Cliente eliminado correctamente');
          this.obtenerClientes(); // Actualiza la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar cliente', error);
          alert('Hubo un problema al eliminar el cliente. Por favor, intenta nuevamente.');
        }
      );
    }
  }

  // Método para redirigir al formulario de nuevo mesero
  nuevoCliente(): void {
    this.router.navigate(['/nuevocliente']); // Redirige al formulario para crear
  }

  logout(): void{
    this.authService.logout();
  }

  goToMeseros(): void {
    this.router.navigate(['/meseros']);  // Redirige a la página de Meseros
  }

  goToPrincipal(): void {
    this.router.navigate(['/principal']);  // Redirige a la página de Meseros
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
