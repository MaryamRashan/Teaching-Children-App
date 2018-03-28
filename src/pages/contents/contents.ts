import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slide1Page } from '../slide1/slide1'
import { Slide2Page } from '../slide2/slide2'
import { Slide3Page } from '../slide3/slide3'
import { Slide4Page } from '../slide4/slide4'
import { Slide5Page } from '../slide5/slide5'
import { Slide6Page } from '../slide6/slide6'

@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html'
})
export class ContentsPage {

  constructor(public navCtrl: NavController) {

  }
  gotofirst() {
    this.navCtrl.push(Slide1Page, )
  }
  gotosecond() {
    this.navCtrl.push(Slide2Page, )
  }
  gotothird() {
    this.navCtrl.push(Slide3Page, )
  }
  gotofourth() {
    this.navCtrl.push(Slide4Page, )
  }
  gotofifth() {
    this.navCtrl.push(Slide5Page, )
  }
  gotosixth() {
    this.navCtrl.push(Slide6Page, )
  }
}
