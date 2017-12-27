import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-history-of-clients',
  templateUrl: 'history-of-clients.html',
})
export class HistoryOfClientsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 public goBack = () => {
    this.navCtrl.pop();
  }

}
