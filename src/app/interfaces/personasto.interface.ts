export interface IPersonaTO{
  _id: String;
  nombres: String;
  apellidos: String;
  documento: String;
  fechaNacimiento: String;
  usuario: String;
  clave: String;
  rol: String;

}

export class PersonaTO implements IPersonaTO{
  public _id="";
  public nombres= "";
  public apellidos= "";
  public documento= "";
  public fechaNacimiento= "";
  public usuario = "";
  public clave= "";
  public rol= "";  // asi esta en el backend

}

