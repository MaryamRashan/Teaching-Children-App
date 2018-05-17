import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide17Page } from '../slide17/slide17'
import { Slide19Page } from '../slide19/slide19'

/**
 * Generated class for the Slide18Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide18',
  templateUrl: 'slide18.html',
})
export class Slide18Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide18Page');
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide19Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 6) {
      this.navCtrl.push('Slide17Page');
    }
  }
}
