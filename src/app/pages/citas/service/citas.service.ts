import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitasTO } from '../../../interfaces/citasto.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url: string = 'https://proyect-cm1.onrender.com/api/citas';  // se cambia por la direccion de la API en la nube de Render

  constructor(private _http: HttpClient) { }

  listarCitas(): Observable<CitasTO[]> {
    return this._http.get<CitasTO[]>(this.url);
  }

  guardar(cita: CitasTO): Observable<string> {
    return this._http.post<string>(this.url, cita);
  }

  modificar(cita: CitasTO): Observable<string> {
    return this._http.put<string>(this.url, cita);
  }

  eliminar(id: string): Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }

}
