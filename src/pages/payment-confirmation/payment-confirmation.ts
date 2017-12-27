import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-payment-confirmation',
  templateUrl: 'payment-confirmation.html',
})
export class PaymentConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 gotohome(){
   this.navCtrl.setRoot(HomePage);
 }

}
