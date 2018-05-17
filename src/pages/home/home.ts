import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentsPage } from '../contents/contents';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('ContentsPage');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsPage');
  }

}
