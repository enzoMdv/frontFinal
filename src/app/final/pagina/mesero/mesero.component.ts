import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeseroService } from '../../../core/services/mesero.service'; // Servicio que conecta con la API
import { AuthService } from '../../../core/services/auth.service';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-meseros',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.scss']
})
export default class MeseroComponent implements OnInit {
  listaMeseros: any[] = []; // Lista de meseros que viene de la API


  constructor(private meseroService: MeseroService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerMeseros();
  }

  // Método para obtener todos los meseros
  obtenerMeseros(): void {
    this.meseroService.obtenerTodos().subscribe(
      (data) => {
        this.listaMeseros = data; // Almacena los datos en la lista
      },
      (error) => {
        console.error('Error al obtener meseros', error);
      }
    );
  }

  // Método para editar un mesero
  editarMesero(id: number): void {
    this.router.navigate(['/editarmesero', id]); // Redirige al componente de edición
  }

  // Método para eliminar un mesero
  eliminarMesero(id: number): void {
    if (confirm('¿Estás seguro de eliminar este mesero?')) {
      this.meseroService.eliminar(id).subscribe(
        () => {
          alert('Mesero eliminado correctamente');
          this.obtenerMeseros(); // Actualiza la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar mesero', error);
          alert('Hubo un problema al eliminar el mesero. Por favor, intenta nuevamente.');
        }
      );
    }
  }
  

  // Método para redirigir al formulario de nuevo mesero
  nuevoMesero(): void {
    this.router.navigate(['/nuevomesero']); // Redirige al formulario para crear
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
