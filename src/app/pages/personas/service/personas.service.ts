import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // importamos el observable
import { PersonaTO } from '../../../interfaces/personasto.interface'; // importamos la interface

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url: string = 'https://backmedica.herokuapp.com/api/personas'; // url del backend, // se cambia por la direccion del heroku

  constructor(private _http: HttpClient) { }

  listarPersonas() : Observable<PersonaTO[]> {
    return this._http.get<PersonaTO[]>(this.url);
  }

  guardar(persona: PersonaTO) : Observable<string> {
    return this._http.post<string>(this.url, persona);
  }

  modificar(persona: PersonaTO) : Observable<string> {
    return this._http.put<string>(this.url, persona);
  }

  eliminar(id : string) : Observable<string> {
    return this._http.delete<string>(this.url + "/" + id);
  }
}
