import { Component, OnInit } from '@angular/core';
import { RegistrouserService } from '../services/registrouser.service';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  constructor(private service: RegistrouserService) { }

  public nombre: any;
  public apellidos: any;
  public tipo_documento: any;
  public no_documento: any;
  public celular: any;
  public correo: any;
  public clave: any;
  public rol = "U";
  public estado = "ACTIVO";

  ngOnInit() {
  }

  guardarRegistro() {
    const data = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      tipo_documento: this.tipo_documento,
      no_documento: this.no_documento,
      celular: this.celular,
      correo: this.correo,
      clave: this.clave,
      rol: this.rol,
      estado: this.estado
    }
    this.service.setRegistroUser(data).subscribe(Response => {
      console.log(Response);
    })

  }
}
