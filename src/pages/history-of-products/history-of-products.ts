import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { HistoryOfProductsDetailsPage } from "../history-of-products-details/history-of-products-details";

@Component({
  selector: 'page-history-of-products',
  templateUrl: 'history-of-products.html',
})
export class HistoryOfProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public goBack = () => {
    this.navCtrl.pop();
  }
  gotodetails(){
    this.navCtrl.push(HistoryOfProductsDetailsPage)
  }

}
