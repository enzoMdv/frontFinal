import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenService } from '../../../core/services/orden.service'; 
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-editarorden',
  imports: [FormsModule, CommonModule],
  templateUrl: './editarorden.component.html',
  styleUrl: './editarorden.component.scss'
})
export default class EditarordenComponent{

  orden: any = {
    id_orden: null,
    id_mesa: null,
    id_platillo: null,
    id_cliente: null,
    cantidad: 0,
  };

  constructor(private ordenService: OrdenService, private authService: AuthService, private route: ActivatedRoute,
        private router: Router) {}
  
        ngOnInit(): void {
          const id = this.route.snapshot.params['id']; // Obtener el ID de la URL
          this.ordenService.obtenerPorId(id).subscribe(
            (data) => {
              this.orden = data; // Llenar el formulario con los datos
            },
            (error) => {
              console.error('Error al obtener orden:', error);
            }
          );
        }

        guardarCambios(): void {
          this.ordenService.actualizar(this.orden.id_orden, this.orden).subscribe(
            () => {
              alert('Orden actualizada correctamente');
              this.router.navigate(['/orden']); // Redirigir a la página principal
            },
            (error) => {
              console.error('Error al actualizar orden:', error);
            }
          );
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
