import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  private apiURLPlantillas = 'http://localhost:3030/api/platillos';
  private apiURLPlantilla = 'http://localhost:3030/api/platillo';
  

  constructor(private http: HttpClient) { }

    obtenerTodos(): Observable<any> {
      return this.http.get(this.apiURLPlantillas);
    }

    // Obtener un mesero por ID
    obtenerPorId(id: number): Observable<any> {
      return this.http.get(`${this.apiURLPlantilla}/${id}`);
    }

    // Agregar un nuevo mesero
    agregarPlatillo(platillo: any): Observable<any> {
      return this.http.post(`${this.apiURLPlantilla}`, platillo);
    }

    // Eliminar un mesero por ID
    eliminar(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiURLPlantilla}/${id}`);
    }

      // Actualizar un mesero
      actualizar(id: number, platillo: any): Observable<any> {
        return this.http.put(`${this.apiURLPlantilla}`, platillo);
      }

}
