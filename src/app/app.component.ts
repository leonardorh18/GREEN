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
  public selectedIndex = 0;

  public appMenu =[
    {title: 'Feed', url:'/home', icon:'home'},
    {title: 'Notas', url:'/notas', icon:'create'},
    {title: 'Horarios', url:'/horarios', icon:'time'},
    {title: 'Material Didatico', url:'/material', icon:'book'},
    {title: 'Mensagem CCR', url:'/mensagem', icon:'chatbubbles'},
    {title: 'Biblioteca', url:'/biblioteca', icon:'library'},
    {title: 'RU', url:'/ru', icon:'restaurant'},
    {title: 'Info UFFS', url:'/info-uffs', icon:'alert-circle'},
    {title: 'Configuração', url:'/configuracao', icon:'settings'}

  ]
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
  
  ngOnInit() {
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appMenu.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
