import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../../core/services/cliente.service'; // Servicio que conecta con la API
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-editarcliente',
  imports: [FormsModule, CommonModule],
  templateUrl: './editarcliente.component.html',
  styleUrl: './editarcliente.component.scss'
})
export default class EditarclienteComponent {

  cliente: any = {
    id_cliente: null,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    telefono: '',
    dni: '',
  };

  constructor(private clienteService: ClienteService, private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Obtener el ID de la URL
    this.clienteService.obtenerPorId(id).subscribe(
      (data) => {
        this.cliente = data; // Llenar el formulario con los datos
      },
      (error) => {
        console.error('Error al obtener cliente:', error);
      }
    );
  }

  // Método para guardar cambios
  guardarCambios(): void {
    this.clienteService.actualizar(this.cliente.id_cliente, this.cliente).subscribe(
      () => {
        alert('Cliente actualizado correctamente');
        this.router.navigate(['/cliente']); // Redirigir a la página principal
      },
      (error) => {
        console.error('Error al actualizar cliente:', error);
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
