import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelpCenterDetailsPage } from "../help-center-details/help-center-details";


@Component({
  selector: 'page-help-center',
  templateUrl: 'help-center.html',
})
export class HelpCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }


    public goBack = () => {
    this.navCtrl.pop();
  }

  itemSelected(id){
      switch(id){
        case 1 :
        this.navCtrl.push(HelpCenterDetailsPage,1)
        break;
        case 2 :
        this.navCtrl.push(HelpCenterDetailsPage,2)        
        break;
        case 3 :
        this.navCtrl.push(HelpCenterDetailsPage,3)        
        break;
      }
  }



}
