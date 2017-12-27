import { Component } from '@angular/core';
import { NavController, NavParams, Events } from "ionic-angular";
import { HistoryOfProductsPage } from "../history-of-products/history-of-products";
import { ProductOfClientDetailsPage } from "../product-of-client-details/product-of-client-details";

@Component({
  selector: 'page-products-of-client',
  templateUrl: 'products-of-client.html',
})
export class ProductsOfClientPage {
  productModels: { id: string; img: string; paymentType: string; bank: string; accountType: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public _event: Events) {
      this.productModels = [
      {id: "0", img:"assets/img/tarjeta 1.png", paymentType: "General", bank: "Se enviará la suscripción del producto", accountType: ""},
      {id: "1", img:"assets/img/tarjeta 2.png", paymentType: "CitiPremier", bank: "CitBanamex", accountType: "Premium"},
      {id: "2", img:"assets/img/tarjeta 1.png", paymentType: "Black", bank: "AMEX", accountType: "Premium"},
      {id: "3", img:"assets/img/tarjeta 2.png", paymentType: "Travel Pass", bank: "CitiBanamex", accountType: "Viajera"},
      {id: "4", img:"assets/img/tarjeta 1.png", paymentType: "B·smart", bank: "CitBanamex", accountType: "Premium"},
      {id: "5", img:"assets/img/tarjeta 2.png", paymentType: "Aeromexico Premier", bank: "AMEX", accountType: "Personalizada"}
    ];
  }

  public goBack = () => {
    this.navCtrl.pop();
  }

  pushTomyproducts(){
    this.navCtrl.push(HistoryOfProductsPage)
  }

  pushToproductDetail(product){
    this.navCtrl.push(ProductOfClientDetailsPage,product)
  }

}
