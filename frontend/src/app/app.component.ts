import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'ios-home'
    },
    {
      title: 'Mis Servicios',
      url: '/services',
      icon: 'ios-car'
    },
    {
      title: 'Pago',
      url: '/pagos',
      icon: 'ios-card'
    },
    {
      title: 'Códigos Promocionales',
      url: '/codigos',
      icon: 'ios-pricetags'
    },
    {
      title: 'Ayuda y Soporte',
      url: '/soporte',
      icon: 'headset'
    },
    {
      title: 'Configuración',
      url: '/configuracion',
      icon: 'md-settings'
    },
    {
      title: 'Notificaciones',
      url: '/configuracion',
      icon: 'md-notifications-outline'
    },
    {
      title: 'Terminos y Condiciones',
      url: '/terminosycondiciones',
      icon: 'ios-create'
    },
    {
      title: 'Cerrar Sesión',
      url: '',
      icon: 'ios-power'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
