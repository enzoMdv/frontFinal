import { Component } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-editarcategoria',
  imports: [FormsModule, CommonModule],
  templateUrl: './editarcategoria.component.html',
  styleUrl: './editarcategoria.component.scss'
})
export default class EditarcategoriaComponent {

  categoria: any = {
    id_categoria: null,
    nombre: '',
    descripcion: ''
  };

  constructor(private categoriaService: CategoriaService, private authService: AuthService, private route: ActivatedRoute,
    private router: Router) {}

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

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Obtener el ID de la URL
    this.categoriaService.obtenerPorId(id).subscribe(
      (data) => {
        this.categoria = data; // Llenar el formulario con los datos
      },
      (error) => {
        console.error('Error al obtener categoria:', error);
      }
    );
  }

  guardarCambios(): void {
    this.categoriaService.actualizar(this.categoria.id_categoria, this.categoria).subscribe(
      () => {
        alert('Categoria actualizado correctamente');
        this.router.navigate(['/categoria']); // Redirigir a la página principal
      },
      (error) => {
        console.error('Error al actualizar categoria:', error);
      }
    );
  }

}
