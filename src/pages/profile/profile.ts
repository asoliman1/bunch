import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HelpCenterPage } from "../help-center/help-center";
import { BunchPage } from "../bunch/bunch";
import { EditprofilePage } from "../editprofile/editprofile";
import { Localstorage } from "../../_helpers/localstorage.controller";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  public isClient: boolean;
  public enableNotif: boolean;
  public inteligenFollow: boolean;
  public geoLocalization: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _event: Events,public ls : Localstorage) {
    this.checkUsertype();
  }

  public logout = () => {
    this._event.publish('user:logout');
  }
  checkUsertype(){
    if(localStorage.getItem(this.ls.user)=="client")
      {
        this.isClient=true;
      }
  }
  public UIpdate = (isClient) => {
    if(isClient){
    this.ls.saveUsertype("client");}
    else {this.ls.saveUsertype("seller")}
    this._event.publish('user:client', isClient);
  }
  public gotohelp(){
    this.navCtrl.push(HelpCenterPage)
  }
   public gotobunch(){
    this.navCtrl.push(BunchPage)
  }  

  public gotoeditprofile(){
    this.navCtrl.push(EditprofilePage)
  }  
}
