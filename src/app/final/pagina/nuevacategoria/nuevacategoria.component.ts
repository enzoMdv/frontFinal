import { Component } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-nuevacategoria',
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevacategoria.component.html',
  styleUrl: './nuevacategoria.component.scss'
})
export default class NuevacategoriaComponent {

  categoria = {
    nombre: '',
    descripcion: ''
  };


  constructor(private categoriaService: CategoriaService,private authService: AuthService, private router: Router) {}

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

        // Método para guardar el mesero
        guardarCategoria(): void {
          this.categoriaService.agregarCategoria(this.categoria).subscribe({
            next: (res) => {
              console.log('Categoria guardado exitosamente', res);
              this.router.navigate(['/categoria']); // Redirigir a la página de meseros
            },
            error: (err) => {
              console.error('Error al guardar categoria', err);
            },
          });
        }

        cancelar(): void {
          this.router.navigate(['/categoria']); // Redirige a la página de meseros
        }


}
