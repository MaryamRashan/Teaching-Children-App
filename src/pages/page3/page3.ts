import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { Slide1Page } from '../slide1/slide1';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide1Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('Page2Page');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
