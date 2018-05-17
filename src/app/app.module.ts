import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContentsPageModule } from '../pages/contents/contents.module';
import { HomePageModule } from '../pages/home/home.module';
import { Slide1PageModule } from '../pages/slide1/slide1.module'
import { Slide2PageModule } from '../pages/slide2/slide2.module'
import { Slide3PageModule } from '../pages/slide3/slide3.module'
import { Slide4PageModule } from '../pages/slide4/slide4.module'
import { Slide5PageModule } from '../pages/slide5/slide5.module'
import { Slide6PageModule } from '../pages/slide6/slide6.module'
import { Slide7PageModule } from '../pages/slide7/slide7.module'
import { Slide8PageModule } from '../pages/slide8/slide8.module'
import { Slide9PageModule } from '../pages/slide9/slide9.module'
import { Slide10PageModule } from '../pages/slide10/slide10.module'
import { Slide11PageModule } from '../pages/slide11/slide11.module'
import { Slide12PageModule } from '../pages/slide12/slide12.module'
import { Slide13PageModule } from '../pages/slide13/slide13.module'
import { Slide14PageModule } from '../pages/slide14/slide14.module'
import { Slide15PageModule } from '../pages/slide15/slide15.module'
import { Slide16PageModule } from '../pages/slide16/slide16.module'
import { Slide17PageModule } from '../pages/slide17/slide17.module'
import { Slide18PageModule } from '../pages/slide18/slide18.module'
import { Slide19PageModule } from '../pages/slide19/slide19.module'
import { Slide20PageModule } from '../pages/slide20/slide20.module'
import { Slide21PageModule } from '../pages/slide21/slide21.module'
import { Slide22PageModule } from '../pages/slide22/slide22.module'
import { Slide23PageModule } from '../pages/slide23/slide23.module'
import { Slide24PageModule } from '../pages/slide24/slide24.module'
import { Slide25PageModule } from '../pages/slide25/slide25.module'
import { Slide26PageModule } from '../pages/slide26/slide26.module'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home'
import { ContentsPage } from '../pages/contents/contents'
import { Slide1Page } from '../pages/slide1/slide1'
import { Slide2Page } from '../pages/slide2/slide2'
import { Slide3Page } from '../pages/slide3/slide3'
import { Slide4Page } from '../pages/slide4/slide4'
import { Slide5Page } from '../pages/slide5/slide5'
import { Slide6Page } from '../pages/slide6/slide6'
import { Slide7Page } from '../pages/slide7/slide7'
import { Slide8Page } from '../pages/slide8/slide8'
import { Slide9Page } from '../pages/slide9/slide9'
import { Slide10Page } from '../pages/slide10/slide10'
import { Slide11Page } from '../pages/slide11/slide11'
import { Slide12Page } from '../pages/slide12/slide12'
import { Slide13Page } from '../pages/slide13/slide13'
import { Slide14Page } from '../pages/slide14/slide14'
import { Slide15Page } from '../pages/slide15/slide15'
import { Slide16Page } from '../pages/slide16/slide16'
import { Slide17Page } from '../pages/slide17/slide17'
import { Slide18Page } from '../pages/slide18/slide18'
import { Slide19Page } from '../pages/slide19/slide19'
import { Slide20Page } from '../pages/slide20/slide20'
import { Slide21Page } from '../pages/slide21/slide21'
import { Slide22Page } from '../pages/slide22/slide22'
import { Slide23Page } from '../pages/slide23/slide23'
import { Slide24Page } from '../pages/slide24/slide24'
import { Slide25Page } from '../pages/slide25/slide25'
import { Slide26Page } from '../pages/slide26/slide26'

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    ContentsPageModule,
    Slide1PageModule,
    Slide2PageModule,
    Slide3PageModule,
    Slide4PageModule,
    Slide5PageModule,
    Slide6PageModule,
    Slide7PageModule,
    Slide8PageModule,
    Slide9PageModule,
    Slide10PageModule,
    Slide11PageModule,
    Slide12PageModule,
    Slide13PageModule,
    Slide14PageModule,
    Slide15PageModule,
    Slide16PageModule,
    Slide17PageModule,
    Slide18PageModule,
    Slide19PageModule,
    Slide20PageModule,
    Slide21PageModule,
    Slide22PageModule,
    Slide23PageModule,
    Slide24PageModule,
    Slide25PageModule,
    Slide26PageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContentsPage,
    HomePage,
    Slide1Page,
    Slide2Page,
    Slide3Page,
    Slide4Page,
    Slide5Page,
    Slide6Page,
    Slide7Page,
    Slide8Page,
    Slide9Page,
    Slide10Page,
    Slide11Page,
    Slide12Page,
    Slide13Page,
    Slide14Page,
    Slide15Page,
    Slide16Page,
    Slide17Page,
    Slide18Page,
    Slide19Page,
    Slide20Page,
    Slide21Page,
    Slide22Page,
    Slide23Page,
    Slide24Page,
    Slide25Page,
    Slide26Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
