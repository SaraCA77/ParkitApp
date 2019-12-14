import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registropark',
  templateUrl: './registropark.page.html',
  styleUrls: ['./registropark.page.scss'],
})
export class RegistroparkPage implements OnInit {

  constructor(
    public toastController: ToastController) { }

  ngOnInit() {
  }

}
