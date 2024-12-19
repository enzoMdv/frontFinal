import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeseroService {

  private apiURLPlantilla = 'http://localhost:3030/api/mesero';
  private apiURL = 'http://localhost:3030/api/mesero/getMeseros'; // URL de tu API // URL de tu API
  private apiUpdate = '//localhost:3030/api/agregarMesero'; // URL de tu API

  constructor(private http: HttpClient) {}

    // Obtener todos los meseros
    obtenerTodos(): Observable<any> {
      return this.http.get(this.apiURL);
    }

    // Obtener un mesero por ID
    obtenerPorId(id: number): Observable<any> {
      return this.http.get(`${this.apiURLPlantilla}/${id}`);
    }

    // Agregar un nuevo mesero
    agregarMesero(mesero: any): Observable<any> {
      return this.http.post(`${this.apiUpdate}`, mesero);
    }

    // Eliminar un mesero por ID
    eliminar(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiURLPlantilla}/${id}`);
    }

    // Actualizar un mesero
    actualizar(id: number, mesero: any): Observable<any> {
      return this.http.put(`${this.apiUpdate}`, mesero);
    }
}
