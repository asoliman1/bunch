import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-history-of-products-details',
  templateUrl: 'history-of-products-details.html',
})
export class HistoryOfProductsDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 public goBack = () => {
    this.navCtrl.pop();
  }

}
