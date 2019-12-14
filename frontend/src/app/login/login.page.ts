import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private service: LoginService) { }


  ngOnInit() {
  }

  public usuario: any;
  public clave: any;

  LoginV() {
    const data = {
      usuario: this.usuario,
      clave: this.clave
    }
    this.service.getUserId(data).subscribe(Response => {
      console.log(Response);
    })
  }
}
