import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
// import { HomePage } from '../pages/home/home';
// import { MePage } from '../pages/me/me';
// import { MyeventsPage } from '../pages/myevents/myevents';
// import { EventsPage } from '../pages/events/events';
// import { TabsPage } from "../pages/tabs/tabs";
// import { EventModalPage } from '../pages/event-modal/event-modal';
// import { Add-event } from '../pages/add-event/add-event';
// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WelcomePage;
  // rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
