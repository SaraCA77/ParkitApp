import { Component, OnInit } from '@angular/core';
import { RegistrouserService } from '../services/registrouser.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  constructor(
    public toastController: ToastController,
    private service: RegistrouserService) { }

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
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registrado con exito!.',
      duration: 2000
    });
    toast.present();
  }

  async guardarRegistro() {
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

    await this.service.setRegistroUser(data).subscribe(Response => {
      console.log(Response);
      this.presentToast();
    })
   
    console.log();
    
  }
}
