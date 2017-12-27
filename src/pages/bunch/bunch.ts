import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-bunch',
  templateUrl: 'bunch.html',
})
export class BunchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public goBack = () => {
    this.navCtrl.pop();
  }

}
