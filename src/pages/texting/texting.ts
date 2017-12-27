import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-texting',
  templateUrl: 'texting.html',
})
export class TextingPage {
 
  public chats: Array<{id: string, img: string, name: string, lastMessage: string, updated: string }>


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chats = [
      { id: "0", img: "assets/icon/usuario-pendiente.png", name: "Miguel Hernández", lastMessage: "La anualidad 0 implica que no paga comisiones durante el año", updated: "14/06/16" },
      { id: "1", img: "assets/icon/usuario-rechazado.png", name: "Maricela Palma", lastMessage: "Ok gracias, ya tengo seguro", updated: "14/06/16" },
      { id: "2", img: "assets/icon/usuario-espera.png", name: "Daniel Benitez", lastMessage: "Hola Daniel, te recomiendo que no compres valores de mercado.", updated: "14/06/16" },
      { id: "3", img: "assets/icon/usuario-pendiente.png", name: "Eduardo Luna", lastMessage: "Prueba con el producto que te recomendé el otro día.", updated: "14/06/16" }
    ]
  }

 public seeChat = (chat) => {
   this.navCtrl.push(ChatPage, chat, { animate: true });
 }

}
