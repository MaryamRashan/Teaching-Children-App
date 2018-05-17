import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide16Page } from '../slide16/slide16'
import { Slide18Page } from '../slide18/slide18'

/**
 * Generated class for the Slide17Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide17',
  templateUrl: 'slide17.html',
})
export class Slide17Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide17Page');
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide18Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 6) {
      this.navCtrl.push('Slide16Page');
    }
  }
}
