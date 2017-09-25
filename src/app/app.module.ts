import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MePage } from '../pages/me/me';
import { PremiumeventsPage } from '../pages/premiumevents/premiumevents';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { AddEventPage } from '../pages/add-event/add-event';
import { MyeventsPage } from '../pages/myevents/myevents';
import { EventsPage } from '../pages/events/events';
import { EventModalPage } from '../pages/event-modal/event-modal';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';

import { HideFabDirective } from '../directives/hide-fab/hide-fab';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    HomePage,
    MePage,   
    PremiumeventsPage,
    SettingsPage,
    TabsPage,
	  HideFabDirective,
    AddEventPage,
    RegisterPage,
    MyeventsPage,
    EventModalPage,
    EventsPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top',tabsHideOnSubPages: true}),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    HomePage,
    MePage,   
    PremiumeventsPage,
    SettingsPage,
    TabsPage,
    AddEventPage,
    RegisterPage,
    MyeventsPage,
    EventModalPage,
    EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
