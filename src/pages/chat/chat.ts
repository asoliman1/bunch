import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { PurchasePage } from "../purchase/purchase";


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  public chatBox: string;
  public type: string = "bitacora";
  contents: boolean;
  public chat = {};
  public mess: message;
  public conversations: Array<{ text: string, img: string, at: string, mine: boolean }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    let data = this.navParams.data;
    this.chat = {
      id: data.id,
      img: "assets/icon/usuario-chat-1.png",
      name: data.name,
      lastMessage: data.lastMessage,
      updated: data.updated
    };

    this.conversations = [
      { text: "Hola, ¿por qué es necesario un seguro?", img: "assets/icon/usuario-chat-1.png", at: "01:25am", mine: false },
      { text: "Hola, ¿por qué es necesario un seguro?", img: "assets/icon/usuario-chat-2.png", at: "01:25am", mine: true },
    ]
    this.contents = true;
  }

  public send(text: string) {


    if (!text) return;
    let d = new Date();
    let date = d.toLocaleTimeString().replace(/:\d+ /, ' ');
    let obj = {
      text,
      img: "assets/icon/usuario-chat-2.png",
      at: date,
      mine: true
    }
    console.log("data ", obj);
    this.chatBox = "";
    this.conversations.push(obj);

  }
  public goBack = () => {
    this.navCtrl.pop();
  }

  showcontents() {
    this.contents = false;
  }

  gotopurshase() {
    this.navCtrl.push(PurchasePage, "compare");
  }

}

interface message {
  img: string,
  message: string,
  time: string
}