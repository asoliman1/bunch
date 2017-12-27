import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoryOfProductsPage } from "../history-of-products/history-of-products";
import { HistoryOfClientsPage } from "../history-of-clients/history-of-clients";
import { PromotionsPage } from "../promotions/promotions";


@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotohistoryofproducts(){
    this.navCtrl.push(HistoryOfProductsPage)
  }
  gotopromotions(){
    this.navCtrl.push(PromotionsPage);
  }
  gotohistoryofclients(){
    this.navCtrl.push(HistoryOfClientsPage);
    
  }

}
