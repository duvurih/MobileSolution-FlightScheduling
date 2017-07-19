import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FlightSchedulePage } from '../pages/flights/flightschedule';
import { FlightStatusSlide } from '../pages/flights/flightstatusslide';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArrayFilterPipe } from '../services/pipe.service';
import { NotificationService } from '../services/notification.service';

@NgModule({
  declarations: [
    ArrayFilterPipe,    
    MyApp,
    TabsPage,
    MenuPage,    
    SettingsPage,    
    HomePage,
    ListPage,
    FlightSchedulePage,
    FlightStatusSlide,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    MenuPage,    
    SettingsPage,     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    NotificationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
