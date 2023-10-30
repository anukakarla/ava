
import { Injectable } from '@angular/core';


declare var SockJS:any;
declare var Stomp:any;

@Injectable({
  providedIn: 'root'
})


export class ChatboxService {
  public msg:any = [];

  public stompClient: any;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    
    const serverUrl = 'http://localhost:8081/message';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    
    this.stompClient.connect({}, function (frame: any) {
      that.stompClient.subscribe('/topic/messages', (message: { body: string; }) => {

        if (message.body) {
          let value;
          value=JSON.parse(message.body);
          for (const key in value) {
            
            if (Object.prototype.hasOwnProperty.call(value, key)) {
              const element = value[key];
              that.msg.push(element);
              window.alert(element);
              
            }
          }
          
         
        }
      });
    });
  }

  

}
