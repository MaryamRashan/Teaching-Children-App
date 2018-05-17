import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContentsPage } from '../pages/contents/contents'
import { Page1Page } from '../pages/page1/page1'
import { Page2Page } from '../pages/page2/page2'
import { Page3Page } from '../pages/page3/page3'
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
import { Slide26Page } from '../pages/slide26/slide26';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Cover', component: HomePage },
      { title: '2', component: Page1Page },
      { title: '3', component: Page2Page },
      { title: '4', component: Page3Page },
      { title: '5', component: Slide1Page },
      { title: '6', component: Slide2Page },
      { title: '7', component: Slide3Page },
      { title: '8', component: Slide4Page },
      { title: '9', component: Slide5Page },
      { title: '10', component: Slide6Page },
      { title: '11', component: Slide7Page },
      { title: '12', component: Slide8Page },
      { title: '13', component: Slide9Page },
      { title: '14', component: Slide10Page },
      { title: '15', component: Slide11Page },
      { title: '16', component: Slide12Page },
      { title: '17', component: Slide13Page },
      { title: '18', component: Slide14Page },
      { title: '19', component: Slide15Page },
      { title: '20', component: Slide16Page },
      { title: '21', component: Slide17Page },
      { title: '22', component: Slide18Page },
      { title: '23', component: Slide19Page },
      { title: '24', component: Slide20Page },
      { title: '25', component: Slide21Page },
      { title: '26', component: Slide22Page },
      { title: '27', component: Slide23Page },
      { title: '28', component: Slide24Page },
      { title: 'Cover', component: Slide26Page },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}