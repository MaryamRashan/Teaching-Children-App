import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContentsPage } from '../pages/contents/contents';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Slide1PageModule } from '../pages/slide1/slide1.module'
import { Slide2PageModule } from '../pages/slide2/slide2.module'
import { Slide3PageModule } from '../pages/slide3/slide3.module'
import { Slide4PageModule } from '../pages/slide4/slide4.module'
import { Slide5PageModule } from '../pages/slide5/slide5.module'
import { Slide6PageModule } from '../pages/slide6/slide6.module'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Slide2Page } from '../pages/slide2/slide2';
import { Slide1Page } from '../pages/slide1/slide1';
import { Slide3Page } from '../pages/slide3/slide3';
import { Slide4Page } from '../pages/slide4/slide4';
import { Slide5Page } from '../pages/slide5/slide5';
import { Slide6Page } from '../pages/slide6/slide6';

@NgModule({
  declarations: [
    MyApp,
    ContentsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Slide1PageModule,
    Slide2PageModule,
    Slide3PageModule,
    Slide4PageModule,
    Slide5PageModule,
    Slide6PageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContentsPage,
    HomePage,
    TabsPage,
    Slide1Page,
    Slide2Page,
    Slide3Page,
    Slide4Page,
    Slide5Page,
    Slide6Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
