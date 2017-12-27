import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-notification-detail',
  templateUrl: 'notification-detail.html',
})
export class NotificationDetailPage {

  public messageModel: any= {}; 
  public cBack: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
    let data = navParams.get('alert');
    this.cBack = navParams.get("callback");
    console.log('data ', data);
     this.messageModel.id = data.id; 
     this.messageModel.message = data.message; 
     this.messageModel.content = data.content; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationDetailPage');
  }

  public deleteNotification = () => {
    let obj = {
      id: this.messageModel.id,
      message: this.messageModel.message,
      content: this.messageModel.content
    };
    this.cBack(obj).then(()=>{
      this.navCtrl.pop();
    })
  }

  public goBack = () => {
    this.navCtrl.pop();
  }

}
// interface MessageModel {
//   id: string;
//   message: string;
//   content: string;
// };
