import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-help-center-details',
  templateUrl: 'help-center-details.html',
})
export class HelpCenterDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
    public goBack = () => {
    this.navCtrl.pop();
  }

}
