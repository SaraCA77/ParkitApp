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
  public tipoDocumento: any;
  public noDocumento: any;
  public celular: any;
  public correo: any;
  public clave: any;
  public rol: any;
  public estado: any;

  ngOnInit() {
  }
  
  guardarRegistro() {
    const data = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      tipoDocumento: this.tipoDocumento,
      noDocumento: this.noDocumento,
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
