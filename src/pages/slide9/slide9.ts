import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide8Page } from '../slide8/slide8';
import { Slide10Page } from '../slide10/slide10'

/**
 * Generated class for the Slide9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide9',
  templateUrl: 'slide9.html',
})
export class Slide9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide9Page');
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide10Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('Slide8Page');
    }
  }
}
