import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { ContentsPage } from '../contents/contents';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Page2Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('ContentsPage');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }
}
