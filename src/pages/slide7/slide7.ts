import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide6Page } from '../slide6/slide6'
/**
 * Generated class for the Slide7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide7',
  templateUrl: 'slide7.html',
})
export class Slide7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide7Page');
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide8Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('Slide6Page');
    }
  }
}
