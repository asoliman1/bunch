import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {
@ViewChild(Slides) slides: Slides;
  
  language : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
   
  }

 
  public navHome  = () =>{
   this.navCtrl.setRoot(LoginPage, false, {animate: true});
  }

  translateToEnglish(){
  this.translateService.use(this.language);
   this.slides.slideNext(500, null)
  console.log("changed")
}

}
