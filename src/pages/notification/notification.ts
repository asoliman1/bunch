import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NotificationDetailPage } from './../notification-detail/notification-detail';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  items: Array<{id: string, message: string, content?: string}>;
  callbackPop = (_params) =>{
    console.log('backparams ',_params);
    this._event.publish('backDone', _params)
     return new Promise((resolve, reject) => {
             resolve();
         });
  }
  backEvent: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _event: Events) {
    this.items =[
      {id: "0", message: "Conoce el nuevo producto de tarjetas de credito", content: "La introspección (del latín « introspicere (mirar en el interior) ») o inspección interna designa la idea de « mirar al interior ». Se trata del conocimiento que el sujeto pueda adquirir de sus propios estados mentales, o sea designa la situación, para un sujeto dado, de observarse y analizarse a sí mismo, interpretando y caracterizando sus propios procesos cognitivos y emotivos."},
      {id: "1", message: "Entérate de cómo ganar más en menos tiempo", content: "La introspección (del latín « introspicere (mirar en el interior) ») o inspección interna designa la idea de « mirar al interior ». Se trata del conocimiento que el sujeto pueda adquirir de sus propios estados mentales, o sea designa la situación, para un sujeto dado, de observarse y analizarse a sí mismo, interpretando y caracterizando sus propios procesos cognitivos y emotivos."},
      {id: "2", message: "Confirma la siguiente información de tu perfil", content: "La introspección (del latín « introspicere (mirar en el interior) ») o inspección interna designa la idea de « mirar al interior ». Se trata del conocimiento que el sujeto pueda adquirir de sus propios estados mentales, o sea designa la situación, para un sujeto dado, de observarse y analizarse a sí mismo, interpretando y caracterizando sus propios procesos cognitivos y emotivos."}
    ];
    this._event.subscribe('backDone',this.deleteView);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  public itemSelected = (itemSelected) =>{
    this.navCtrl.push(NotificationDetailPage, { alert: itemSelected, callback: this.callbackPop }, {animate:true});
  }

  public deleteView = (viewData) => {
   let index = -1;
    for(let a = 0; a < this.items.length; a++) {
      if(viewData.id == this.items[a].id){
        index = a;
      }
    }

    console.log('index viewdata ', index, viewData);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }
}
