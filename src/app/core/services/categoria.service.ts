import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiURLPlantilla = 'http://localhost:3030/api/categoria';
  private apiURLAgregar = 'http://localhost:3030/api/agregarCategoria';
  
  constructor(private http: HttpClient) { }

      obtenerTodos(): Observable<any> {
        return this.http.get(this.apiURLPlantilla);
      }

      // Obtener un mesero por ID
      obtenerPorId(id: number): Observable<any> {
        return this.http.get(`${this.apiURLPlantilla}/${id}`);
      }

          // Agregar un nuevo mesero
    agregarCategoria(categoria: any): Observable<any> {
      return this.http.post(`${this.apiURLAgregar}`, categoria);
    }

    // Eliminar un mesero por ID
    eliminar(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiURLPlantilla}/${id}`);
    }

    // Actualizar un mesero
    actualizar(id: number, categoria: any): Observable<any> {
      return this.http.put(`${this.apiURLPlantilla}`, categoria);
    }
  
}
