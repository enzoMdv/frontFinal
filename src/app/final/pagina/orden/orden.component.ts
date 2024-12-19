import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenService } from '../../../core/services/orden.service'; // Servicio que conecta con la API
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-orden',
  imports: [FormsModule, CommonModule],
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.scss'
})
export default class OrdenComponent  implements OnInit {

  listaOrdenes: any[] = []; // Lista de meseros que viene de la API
  ordenId: number | null = null; // ID del platillo a buscar

  constructor(private ordenService: OrdenService, private authService: AuthService, private router: Router) {}
  
      ngOnInit(): void {
        this.obtenerOrden();
      }

      obtenerOrden(): void {
        this.ordenService.obtenerTodos().subscribe(
          (data) => {
            this.listaOrdenes = data; // Almacena los datos en la lista
          },
          (error) => {
            console.error('Error al obtener ordenes', error);
          }
        );
      }

      buscarOrden(): void {
        if (this.ordenId) {
          // Buscar por ID si el platilloId es proporcionado
          this.ordenService.obtenerPorId2(this.ordenId).subscribe(
            (data) => {
              this.listaOrdenes = [data]; // Solo actualiza la lista con el platillo encontrado
            },
            (error) => {
              console.error('Error al buscar orden', error);
              alert('Orden no encontrado');
            }
          );
        } else {
          // Si no se proporciona ID, obtener todos los platillos
          this.obtenerOrden();
        }
      }

      editarOrden(id: number): void {
        this.router.navigate(['/editarOrden', id]);
      }

      eliminarOrden(id: number): void {
        if (confirm('¿Estás seguro de eliminar esta orden?')) {
          this.ordenService.eliminar(id).subscribe(
            () => {
              alert('Orden eliminada correctamente');
              this.obtenerOrden(); // Actualiza la lista después de eliminar
            },
            (error) => {
              console.error('Error al eliminar orden', error);
              alert('Hubo un problema al eliminar el orden. Por favor, intenta nuevamente.');
            }
          );
        }
      }

      // Método para redirigir al formulario de nuevo mesero
      nuevoOrden(): void {
        this.router.navigate(['/nuevoorden']); // Redirige al formulario para crear
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
