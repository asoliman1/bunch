import { Localstorage } from './../../_helpers/localstorage.controller';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { AdvertisementPage } from "../advertisement/advertisement";
import { ProductsOfClientPage } from "../products-of-client/products-of-client";


@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private lStorage: Localstorage, private _event: Events) {
  
  }


  public throwTopicPage(num) {
      if(localStorage.getItem(this.lStorage.user)=="client") {
        this.navCtrl.push(ProductsOfClientPage)
      }
      else { 
    this.lStorage.addItemToUserForm('type', num, (res) =>{
      console.log('res ', res);
      this.navCtrl.push(AdvertisementPage)
    });
      }
  }
}
