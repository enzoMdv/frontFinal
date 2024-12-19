import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeseroService } from '../../../core/services/mesero.service'; // Servicio que conecta con la API
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-editarmesero',
  imports: [FormsModule, CommonModule],
  templateUrl: './editarmesero.component.html',
  styleUrl: './editarmesero.component.scss'
})
export default class EditarmeseroComponent {

  mesero: any = {
    id_mesero: null,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    dni: '',
  };

  constructor(private meseroService: MeseroService, private authService: AuthService, private route: ActivatedRoute,
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
    this.meseroService.obtenerPorId(id).subscribe(
      (data) => {
        this.mesero = data; // Llenar el formulario con los datos
      },
      (error) => {
        console.error('Error al obtener mesero:', error);
      }
    );
  }

  // Método para guardar cambios
  guardarCambios(): void {
    this.meseroService.actualizar(this.mesero.id_mesero, this.mesero).subscribe(
      () => {
        alert('Mesero actualizado correctamente');
        this.router.navigate(['/meseros']); // Redirigir a la página principal
      },
      (error) => {
        console.error('Error al actualizar mesero:', error);
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
