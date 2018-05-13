import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentsPage } from '../contents/contents';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('ContentsPage');
    }
  }
}
