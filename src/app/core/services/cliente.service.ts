import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURLPlantilla = 'http://localhost:3030/api/cliente';

  private apiURLtodos = 'http://localhost:3030/api/clientes';
  

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<any> {
    return this.http.get(this.apiURLtodos);
  }

  // Obtener un mesero por ID
  obtenerPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiURLPlantilla}/${id}`);
  }

      // Agregar un nuevo mesero
  agregarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.apiURLPlantilla}`, cliente);
  }

  // Eliminar un mesero por ID
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURLPlantilla}/${id}`);
  }

  // Actualizar un mesero
  actualizar(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.apiURLPlantilla}`, cliente);
  }
  
}
