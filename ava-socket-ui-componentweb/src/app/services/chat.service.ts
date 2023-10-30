import { Injectable } from '@angular/core';
import { Message } from '../models/message';

declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public messages = [];

  public stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    
    const serverUrl = 'http://localhost:8080/chat-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/chat/messages', message => {
        if (message.body) {
          let obj = JSON.parse(message.body);
          that.addMessage(obj.text, obj.username, obj.avatar);
        }
      });
    });
  }

  addMessage(message: any, username: string, avatar: string) {
    this.messages.push({
      text: message,
      date: new Date(),
      
      user: {
        name: username,
        avatar: avatar
      }
    });
  }

  sendMessage(msg: Message) {
    this.stompClient.send('/app/sendmsg', {}, JSON.stringify(msg));
  }
}
