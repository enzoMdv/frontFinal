import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { PlatilloService } from '../../../core/services/platillo.service';

@Component({
  selector: 'app-nuevoplatillo',
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevoplatillo.component.html',
  styleUrl: './nuevoplatillo.component.scss'
})
export default class NuevoplatilloComponent {

  platillo = {
    nombre: '',
    ingredientes: '',
    precio: 0,
    id_categoria: 0, // Agregar el id_categoria
  };
  

  constructor(private platilloService: PlatilloService,  private authService: AuthService, private router: Router){}

  goToMeseros(): void {
    this.router.navigate(['/meseros']);  
  }

  goToPrincipal(): void {
    this.router.navigate(['/principal']); 
  }

  logout(): void{
    this.authService.logout();
  }

  guardarPlatillo(): void {
    this.platilloService.agregarPlatillo(this.platillo).subscribe({
      next: (res) => {
        console.log('Platillo guardado exitosamente', res);
        this.router.navigate(['/platillo']);
      },
      error: (err) => {
        console.error('Error al guardar platillo', err);
        alert('Error al ingresar el platillo. Por favor, revise que todos los campos sean correctos.');
      },
    });
  }
  

  cancelar(): void {
    this.router.navigate(['/platillo']); // Redirige a la página de meseros
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
