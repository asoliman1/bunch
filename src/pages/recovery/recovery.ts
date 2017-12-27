import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RecoveryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html'
})
export class RecoveryPage {


  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoveryPage ');
    this.slides.lockSwipes(true);
    this.slides.onlyExternal = true;
  }

  public sendRequest = () => {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext(300);
  }

  public doneRecovery = () => {
    this.navCtrl.setRoot(LoginPage, false, {animate: true});
  }

}
