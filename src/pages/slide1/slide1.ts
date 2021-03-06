import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page3Page } from '../page3/page3'
import { Slide2Page } from '../slide2/slide2'
import { HomePage } from '../home/home';

/**
 * Generated class for the Slide1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide1',
  templateUrl: 'slide1.html',
})
export class Slide1Page {
  
  tab2Root = Slide2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide1Page');
  }
  gotohome() {
    this.navCtrl.push(HomePage, )
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide2Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('Page3Page');
    }
  }
}
