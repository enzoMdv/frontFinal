import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {

  private apiURLPlantilla = 'http://localhost:3030/api/orden';
  private apiUpdatetodos = '//localhost:3030/api/ordenes'; 
  private apiObjeto = '//localhost:3030/api/ordenn'; 
  private apiObjetoBusqueda = '//localhost:3030/api/orden'; 
  

  constructor(private http: HttpClient) { }

    // Obtener todos los meseros
    obtenerTodos(): Observable<any> {
      return this.http.get(this.apiUpdatetodos);
    }

    // Obtener un mesero por ID
    obtenerPorId(id: number): Observable<any> {
      return this.http.get(`${this.apiObjeto}/${id}`);
    }

        // Obtener un mesero por ID
        obtenerPorId2(id: number): Observable<any> {
          return this.http.get(`${this.apiObjetoBusqueda}/${id}`);
        }

    // Agregar un nuevo mesero
    agregarOrden(orden: any): Observable<any> {
      return this.http.post(`${this.apiURLPlantilla}`, orden);
    }

    // Eliminar un mesero por ID
    eliminar(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiURLPlantilla}/${id}`);
    }

    // Actualizar un mesero
    actualizar(id: number, orden: any): Observable<any> {
      return this.http.put(`${this.apiURLPlantilla}`, orden);
    }
}
