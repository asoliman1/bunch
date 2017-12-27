import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { PurchasePage } from "../purchase/purchase";

@Component({
  selector: 'page-product-of-client-details',
  templateUrl: 'product-of-client-details.html',
})
export class ProductOfClientDetailsPage {

  product : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product=this.navParams.data
    console.log(this.product)
  }

 public goBack = () => {
    this.navCtrl.pop();
  }
  purchaseProduct(){
    this.navCtrl.push(PurchasePage)
  }

}
