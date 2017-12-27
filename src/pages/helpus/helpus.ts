import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-helpus',
  templateUrl: 'helpus.html',
})
export class HelpusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpusPage');
  }

}
