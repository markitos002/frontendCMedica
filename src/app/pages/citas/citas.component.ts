import { Component, OnInit } from '@angular/core';
import { CitasTO} from '../../interfaces/citasto.interface';
import { CitasService } from './service/citas.service';
import { Medico} from '../../interfaces/citasto.interface';
import { Paciente} from '../../interfaces/citasto.interface';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private _citasService: CitasService) { }

  listaCitas: CitasTO[] = new Array<CitasTO>();
  cita: CitasTO = new CitasTO();
  listaMedicos: Medico[] = new Array<Medico>();
  Medico: Medico = new Medico();
  listaPacientes: Paciente[] = new Array<Paciente>();
  Paciente: Paciente = new Paciente();

  ngOnInit(): void {
    this.listarCitas();
  }

  listarCitas() {
    this._citasService.listarCitas().subscribe(
      data => {
        this.listaCitas = data;
      }
    );
  }

  limpiarFormulario() {
    this.cita = new CitasTO();
    this.Medico = new Medico();
    this.Paciente = new Paciente();
  }

  mostrar(pCita: CitasTO) {
    this.cita = pCita;
  // seccion inactivada porque no se puede enviar un objeto de tipo medico y paciente
  //this.listaMedicos = this.cita.medico;  //this.cita.medico.push(this.Medico);
  // this.listaPacientes = this.cita.paciente; //this.cita.paciente.push(this.Paciente);


  }

  guardar() {

    // seccion inactivada porque no se puede enviar un objeto de tipo medico y paciente
    //this.cita.medico = this.listaMedicos;  //this.cita.medico.push(this.Medico);
    // this.cita.paciente = this.listaPacientes; //this.cita.paciente.push(this.Paciente);

    if(this.cita._id == ""){
      this._citasService.guardar(this.cita).subscribe(
        data => {
          console.log(this.cita._id)
          console.log(this.cita);
          this.listarCitas();
          this.limpiarFormulario();
        }
      );
    }
    else{
      this._citasService.modificar(this.cita).subscribe(
        data => {
          console.log(this.cita._id)
          console.log(data);
          this.listarCitas();
          this.limpiarFormulario();
        }
      );
    }
  }

  eliminar(id: string) {
    this._citasService.eliminar(id).subscribe(
      data => {
        console.log(data);
        this.listarCitas();

      }
    );
  }

  //   Medicos

  agregarMedico() {
    this.listaMedicos.push(this.Medico);
    this.Medico = new Medico();
  }

  eliminarMedico(i: number) {
    this.listaMedicos.splice(i, 1);
  }

  mostrarMedico(pMedico: Medico) {
    this.Medico = pMedico;
  }

  //   Pacientes

  agregarPaciente() {
    this.listaPacientes.push(this.Paciente);
    this.Paciente = new Paciente();
  }

  eliminarPaciente(i: number) {
    this.listaPacientes.splice(i, 1);
  }

  mostrarPaciente(pPaciente: Paciente) {
    this.Paciente = pPaciente;
  }






}
