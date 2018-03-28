import { Component } from '@angular/core';

import { ContentsPage } from '../contents/contents';
import { Slide1Page } from '../slide1/slide1';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContentsPage;
  tab3Root = Slide1Page;

  constructor() {

  }
}
