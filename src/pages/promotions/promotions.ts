import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html',
})
export class PromotionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   public goBack = () => {
    this.navCtrl.pop();
  }

}
