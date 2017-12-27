import { Constants } from './../../_helpers/constants.controller';
import { Localstorage } from './../../_helpers/localstorage.controller';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { PaymentConfirmationPage } from "../payment-confirmation/payment-confirmation";




@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class PurchasePage {

  public type: string = "product"
  public typeOfProduct: string = "----";
  public age: string = "30 años";
  public gender: string = "m";
  public bond: string = "r";
  public model: string = "0";


  public firstForm: boolean = true;

  public comparativas: Array<{ text: string, img: string }>;

  constructor(public navCtrl: NavController, public dPicker: DatePicker, public navParams: NavParams, public lStore: Localstorage, public constants: Constants, public events: Events) {
    console.log('type ', this.typeOfProduct);
    this.lStore.getProductType((type) => {
      console.log('type ', type);
      this.typeOfProduct = this.constants.getProductTypeById(type);
    });

    this.comparativas = [
      { text: "Costo anual $5,499", img: "assets/icon/perfil-centro-ayuda.png" },
      { text: "Costo anual $5,499", img: "assets/icon/perfil-centro-ayuda.png" }
    ]
    if (navParams.data == "compare")
      this.type = navParams.data;
  }

  public launchPicker = () => {
    this.dPicker.show({
      mode: 'date',
      androidTheme: this.dPicker.ANDROID_THEMES.THEME_HOLO_DARK,
      date: new Date(),
      okText: "Aceptar",
      cancelText: "Cancelar"
    }).then(
      date => {
        let dateAux = new Date();
        this.age = ` ${dateAux.getFullYear() - date.getFullYear()}años`;
      },
      err => console.log('Error occurred while getting date: ', err))
  }


  public nextForm = () => {
    this.firstForm = false;
  }

  public compareSegment = () => {
    this.type = "compare";
  }

  public paymentSegment = () => {
    this.typeOfProduct = "Resumen";
    this.type = "payment";
  }

  public goBack = () => {
    this.navCtrl.pop();
  }

  paymentconfirm() {
    this.navCtrl.push(PaymentConfirmationPage)
  }

}
