import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlatilloService } from '../../../core/services/platillo.service'; // Servicio que conecta con la API
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-platillo',
  imports: [FormsModule, CommonModule],
  templateUrl: './platillo.component.html',
  styleUrl: './platillo.component.scss'
})
export default class PlatilloComponent implements OnInit  {

  listaPlatillos: any[] = []; // Lista de meseros que viene de la API
  platilloId: number | null = null; // ID del platillo a buscar

    constructor(private platilloService: PlatilloService, private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
      this.obtenerPlatillo();
    }

    obtenerPlatillo(): void {
      this.platilloService.obtenerTodos().subscribe(
        (data) => {
          this.listaPlatillos = data; // Almacena los datos en la lista
        },
        (error) => {
          console.error('Error al obtener platillos', error);
        }
      );
    }

    buscarPlatillo(): void {
      if (this.platilloId) {
        // Buscar por ID si el platilloId es proporcionado
        this.platilloService.obtenerPorId(this.platilloId).subscribe(
          (data) => {
            this.listaPlatillos = [data]; // Solo actualiza la lista con el platillo encontrado
          },
          (error) => {
            console.error('Error al buscar platillo', error);
            alert('Platillo no encontrado');
          }
        );
      } else {
        // Si no se proporciona ID, obtener todos los platillos
        this.obtenerPlatillo();
      }
    }

    editarPlatillo(id: number): void {
      this.router.navigate(['/editarplatillo', id]);
    }

    eliminarPlatillo(id: number): void {
      if (confirm('¿Estás seguro de eliminar este platillo?')) {
        this.platilloService.eliminar(id).subscribe(
          () => {
            alert('Platillo eliminado correctamente');
            this.obtenerPlatillo(); // Actualiza la lista después de eliminar
          },
          (error) => {
            console.error('Error al eliminar platillo', error);
            alert('Hubo un problema al eliminar el platillo. Por favor, intenta nuevamente.');
          }
        );
      }
    }

      // Método para redirigir al formulario de nuevo mesero
  nuevoPlatillo(): void {
    this.router.navigate(['/nuevoplatillo']); // Redirige al formulario para crear
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
