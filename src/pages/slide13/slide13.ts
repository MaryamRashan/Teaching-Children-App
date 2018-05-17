import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide12Page } from '../slide12/slide12' 
import { Slide14Page } from '../slide14/slide14'
/**
 * Generated class for the Slide13Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide13',
  templateUrl: 'slide13.html',
})
export class Slide13Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide13Page');
  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Slide14Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('Slide12Page');
    }
  }
}
