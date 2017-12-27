import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAdvertisementPage } from './../create-advertisement/create-advertisement';


@Component({
  selector: 'page-new-advertisement',
  templateUrl: 'new-advertisement.html',
})
export class NewAdvertisementPage {

  public advModels: Array<{ id:string, img:string, paymentType: string, bank:string, accountType:string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.advModels = [
      {id: "0", img:"assets/img/tarjeta 1.png", paymentType: "General", bank: "Se enviará la suscripción del producto", accountType: ""},
      {id: "1", img:"assets/img/tarjeta 2.png", paymentType: "CitiPremier", bank: "CitBanamex", accountType: "Premium"},
      {id: "2", img:"assets/img/tarjeta 1.png", paymentType: "Black", bank: "AMEX", accountType: "Premium"},
      {id: "3", img:"assets/img/tarjeta 2.png", paymentType: "Travel Pass", bank: "CitiBanamex", accountType: "Viajera"},
      {id: "4", img:"assets/img/tarjeta 1.png", paymentType: "B·smart", bank: "CitBanamex", accountType: "Premium"},
      {id: "5", img:"assets/img/tarjeta 2.png", paymentType: "Aeromexico Premier", bank: "AMEX", accountType: "Personalizada"}
    ];
  }

  public pushToCreateDetail = (model) =>{
    this.navCtrl.push(CreateAdvertisementPage, model, {animate: true});
  }
   public goBack = () => {
    this.navCtrl.pop();
  }

}
