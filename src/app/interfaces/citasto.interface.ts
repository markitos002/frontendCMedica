export interface IMedicoTO {
  nombres: String;
  apellidos: String;
  documento: String;
  especialidad: String;
}

export interface IPacienteTO {
  nombres: String;
  apellidos: String;
  documento: String;
  motivo: String;
}

export interface ICitasTO {
  _id: String;
  horaInicio: String;
  horaFin: String;
  fecha: String;
  cancelacion: Boolean;


// inactivo porque problemas al grabar en la base de datos
//medico: Medico[];   // se debe implen metodo para obtener el medico
// paciente: Paciente[];
}
///// class ///////

export class Medico implements IMedicoTO {
  public nombres="";
  public apellidos="";
  public documento="";
  public especialidad="";
}

export class Paciente implements IPacienteTO {
  public nombres="";
  public apellidos="";
  public documento="";
  public motivo="";
}

export class CitasTO implements ICitasTO {
  public _id="";
  public horaInicio="";
  public horaFin="";
  public fecha="";
  public cancelacion=false;

  //inactivo por problemas al grabar en la base de datos
  //public medico=new Array<Medico>();  // se debe implen metodo para obtener el medico
  //public paciente=new Array<Paciente>();  // se debe implen metodo para obtener el paciente
}
