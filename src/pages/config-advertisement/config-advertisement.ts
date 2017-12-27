import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-config-advertisement',
  templateUrl: 'config-advertisement.html',
})
export class ConfigAdvertisementPage {

  public returnWithData: any;
  public titleAdv: string="";
  public customMessage: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.returnWithData = this.navParams.data;
    
    console.log('data ', this.returnWithData);
  }

  goBackWithParams() {
    console.log('title ', this.titleAdv);
    console.log('custom ', this.customMessage);
    let obj = {
      titleAdv: this.titleAdv,
      customMessage: this.customMessage
    }
    this.returnWithData(obj).then(()=>{
      this.navCtrl.pop();
    });
  }

   public goBack = () => {
    this.navCtrl.pop();
  }

}
