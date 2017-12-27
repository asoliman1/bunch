import { ProductsPage } from './../products/products';
import { Component, ViewChild } from '@angular/core';
import { NavController, Events, Tabs, Tab  } from 'ionic-angular';
import { NotificationPage } from './../notification/notification';
import { TextingPage } from '../../pages/texting/texting';
import { ProfilePage } from '../../pages/profile/profile';
import { StatisticsPage } from './../statistics/statistics';
import { HelpusPage } from "../helpus/helpus";
import { Localstorage } from "../../_helpers/localstorage.controller";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tab1Root: any = NotificationPage;
  public tab2Root: any = TextingPage;
  public tab3Root: any = ProductsPage;
  public tab4Root: any = StatisticsPage;
  public tab7Root: any = ProfilePage;
  public tab6Root: any = HelpusPage;
  public tab5Root: any = ProductsPage;

  public isClient: boolean = false;
  @ViewChild('appTabs')  tabsRef: Tabs;
  @ViewChild('tab3')  tabRef3: Tab;
  @ViewChild('tab4')  tabRef4: Tab;
  @ViewChild('tab5')  tabRef5: Tab;
  @ViewChild('tab6')  tabRef6: Tab;

  constructor(public navCtrl: NavController, private _event: Events,public ls : Localstorage) {
    _event.subscribe('user:client', (isClient) =>{
      console.log(this.isClient)
      this.isClient = isClient;
      if(isClient) {
        this.setClientMode();
      } else {
        this.setSellerMode();
      }
    });
    this.checkUsertype();
  }

  private setClientMode = () =>{
    this.isClient = true;   
    
  }

  private setSellerMode = () => {
    this.isClient = false;
  }

   checkUsertype(){
    if(localStorage.getItem(this.ls.user)=="client")
      {
        this.isClient=true;
      }
  }

}
