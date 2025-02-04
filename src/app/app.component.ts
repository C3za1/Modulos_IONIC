import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'ion-avatar',
      url: '/avatar'
    },
    {
      title: 'ion-Slides',
      url: '/slides'
    },
    {
      title: 'ion-card',
      url: '/card'
    },
    {
      title: 'ion-chip',
      url: '/chip'
    },
    {
      title: 'IonSegmentPage',
      url: '/IonSegment'
    },
    {
      title: 'loading',
      url: '/loading'
    },
    {
      title: 'alert',
      url: '/alert'
    },
    {
      title: 'lista',
      url: '/lista'
    },
    {
      title: 'searchBar',
      url: '/searchbar'
    },
    {
      title: 'temporizador',
      url: '/temporizador'
    },
    {
      title: 'pruebas',
      url: '/pruebas'
    },

  ];
  public labels = ['Family', 'Friends'];

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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
