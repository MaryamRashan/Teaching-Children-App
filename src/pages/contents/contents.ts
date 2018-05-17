import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide1Page } from '../slide1/slide1'
import { Slide2Page } from '../slide2/slide2'
import { Slide3Page } from '../slide3/slide3'
import { Slide4Page } from '../slide4/slide4'
import { Slide5Page } from '../slide5/slide5'
import { Slide6Page } from '../slide6/slide6'
import { Slide7Page } from '../slide7/slide7'
import { Slide8Page } from '../slide8/slide8'
import { Slide9Page } from '../slide9/slide9'
import { Slide10Page } from '../slide10/slide10'
import { Slide11Page } from '../slide11/slide11'
import { Slide12Page } from '../slide12/slide12'
import { Slide13Page } from '../slide13/slide13'
import { Slide14Page } from '../slide14/slide14'
import { Slide15Page } from '../slide15/slide15'
import { Slide16Page } from '../slide16/slide16'
import { Slide17Page } from '../slide17/slide17'
import { Slide18Page } from '../slide18/slide18'
import { Slide19Page } from '../slide19/slide19'
import { Slide20Page } from '../slide20/slide20'
import { Slide21Page } from '../slide21/slide21'
import { Slide22Page } from '../slide22/slide22'
import { Slide23Page } from '../slide23/slide23'
import { Slide24Page } from '../slide24/slide24'
import { Slide25Page } from '../slide25/slide25'
import { Slide26Page } from '../slide26/slide26'
import { Page1Page } from '../page1/page1'
import { HomePage } from '../home/home'
/**
 * Generated class for the ContentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class ContentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } goto1() {
    this.navCtrl.push(Slide1Page, )
  } goto2() {
    this.navCtrl.push(Slide2Page, )
  } goto3() {
    this.navCtrl.push(Slide3Page, )
  } goto4() {
    this.navCtrl.push(Slide4Page, )
  } goto5() {
    this.navCtrl.push(Slide5Page, )
  } goto6() {
    this.navCtrl.push(Slide6Page, )
  } goto7() {
    this.navCtrl.push(Slide7Page, )
  } goto8() {
    this.navCtrl.push(Slide8Page, )
  } goto9() {
    this.navCtrl.push(Slide9Page, )
  } goto10() {
    this.navCtrl.push(Slide10Page, )
  } goto11() {
    this.navCtrl.push(Slide11Page, )
  } goto12() {
    this.navCtrl.push(Slide12Page, )
  } goto13() {
    this.navCtrl.push(Slide13Page, )
  } goto14() {
    this.navCtrl.push(Slide14Page, )
  } goto15() {
    this.navCtrl.push(Slide15Page, )
  } goto16() {
    this.navCtrl.push(Slide16Page, )
  } goto17() {
    this.navCtrl.push(Slide17Page, )
  } goto18() {
    this.navCtrl.push(Slide18Page, )
  } goto19() {
    this.navCtrl.push(Slide19Page, )
  } goto20() {
    this.navCtrl.push(Slide20Page, )
  } goto21() {
    this.navCtrl.push(Slide21Page, )
  } goto22() {
    this.navCtrl.push(Slide22Page, )
  } goto23() {
    this.navCtrl.push(Slide23Page, )
  } goto24() {
    this.navCtrl.push(Slide24Page, )
  } goto25() {
    this.navCtrl.push(Slide25Page, )
  } goto26() {
    this.navCtrl.push(Slide26Page, )
  }
  
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push('Page1Page');
    }
  }
  swipeEventBack(e) {
    if (e.direction == 4) {
      this.navCtrl.push('HomePage');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsPage');
  }

}
