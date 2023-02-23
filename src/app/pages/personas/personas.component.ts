import { Component, OnInit } from '@angular/core';
import { PersonaTO } from '../../interfaces/personasto.interface';
import { PersonasService } from './service/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private _personasService : PersonasService) { }

  listaPersonas: PersonaTO[] = new Array<PersonaTO>();
  persona : PersonaTO = new PersonaTO();

  ngOnInit(): void {
    this.listarPersonas();
  }

  listarPersonas(){
    this._personasService.listarPersonas().subscribe(
      data => {
        this.listaPersonas = data;
      }
    );
  }

  limpiarFormulario(){
    this.persona = new PersonaTO();
  }

  mostrar(pPersona : PersonaTO){
    this.persona = pPersona;
  }

  guardar(){
  if(this.persona._id == ""){
    this._personasService.guardar(this.persona).subscribe(
      data => {
        console.log(this.persona);
        this.listarPersonas();
        this.limpiarFormulario();
      }
    );
  }
  else{
    this._personasService.modificar(this.persona).subscribe(
      data => {
        console.log(data);
        this.listarPersonas();
        this.limpiarFormulario();
      }
    );
  }

}

eliminar(id: string){
    this._personasService.eliminar(id).subscribe(
      data => {
        console.log(data);
        this.listarPersonas();

      }
    );
  }

}
