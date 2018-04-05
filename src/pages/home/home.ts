import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentsPage } from '../contents/contents';
import { Slide1Page } from '../slide1/slide1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotocontents() {
    this.navCtrl.push(ContentsPage, )
  }
  gotoslides() {
    this.navCtrl.push(Slide1Page, )
  }
}
