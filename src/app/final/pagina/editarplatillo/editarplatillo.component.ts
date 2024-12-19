import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlatilloService } from '../../../core/services/platillo.service'; 
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-editarplatillo',
  imports: [FormsModule, CommonModule],
  templateUrl: './editarplatillo.component.html',
  styleUrl: './editarplatillo.component.scss'
})
export default class EditarplatilloComponent {

  platillo: any = {
    id_platillo: null,
    nombre: '',
    ingredientes: '',
    precio: 0,
    id_categoria: 0,
  };

    constructor(private platilloService: PlatilloService, private authService: AuthService, private route: ActivatedRoute,
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

      ngOnInit(): void {
        const id = this.route.snapshot.params['id']; // Obtener el ID de la URL
        this.platilloService.obtenerPorId(id).subscribe(
          (data) => {
            this.platillo = data; // Llenar el formulario con los datos
          },
          (error) => {
            console.error('Error al obtener platillo:', error);
          }
        );
      }

      guardarCambios(): void {
        this.platilloService.actualizar(this.platillo.id_platillo, this.platillo).subscribe(
          () => {
            alert('Platillo actualizado correctamente');
            this.router.navigate(['/platillo']); // Redirigir a la página principal
          },
          (error) => {
            console.error('Error al actualizar platillo:', error);
          }
        );
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
