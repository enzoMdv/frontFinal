import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  imports: [FormsModule, CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export default class CategoriaComponent implements OnInit{

  listaCategorias: any[] = []; // Lista de meseros que viene de la API

  constructor(private categoriaService: CategoriaService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.categoriaService.obtenerTodos().subscribe(
      (data) => {
        this.listaCategorias = data; // Almacena los datos en la lista
      },
      (error) => {
        console.error('Error al obtener meseros', error);
      }
    );
  }

    // Método para editar un mesero
    editarCategoria(id: number): void {
      this.router.navigate(['/editarcategoria', id]); // Redirige al componente de edición
    }

    eliminarCategoria(id: number): void {
      if (confirm('¿Estás seguro de eliminar esta categoria?')) {
        this.categoriaService.eliminar(id).subscribe(
          () => {
            alert('Categoria eliminado correctamente');
            this.obtenerCategorias(); // Actualiza la lista después de eliminar
          },
          (error) => {
            console.error('Error al eliminar la categoria', error);
            alert('Hubo un problema al eliminar el categoria. Por favor, intenta nuevamente.');
          }
        );
      }
    }

      // Método para redirigir al formulario de nuevo mesero
  nuevaCategoria(): void {
    this.router.navigate(['/nuevacategoria']); // Redirige al formulario para crear
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
