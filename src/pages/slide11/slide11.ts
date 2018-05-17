import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide12Page } from '../slide12/slide12'
import { Slide10Page } from '../slide10/slide10'

/**
 * Generated class for the Slide11Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide11',
  templateUrl: 'slide11.html',
})
export class Slide11Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide11Page');
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide12Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('Slide10Page');
    }
  }
}
