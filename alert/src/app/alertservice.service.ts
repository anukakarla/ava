import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
declare var Stomp: any; 

@Injectable({
  providedIn: 'root'
})
export class AlertserviceService {
  public msg: any =[];
  public stompClient: any;
  public stomp: any;
  

  constructor() { 
    this.connected();
  }
  connected(){
    // const serverUrl='http:localhost:8080/message';
    const ws=io("http:localhost:8080/message")

    //  const  ws=new SockJs(serverUrl);
    this.stompClient=Stomp.over(ws)
    const that=this;
    this.stompClient.connect({},function(frame: any){
      that.stompClient.subscribe('/topic/messages',(message: { body: string; })=>{
        if(message.body){
          that.msg.push(message.body);
          window.alert(message.body);
        }
      });
    }
    
    );
  }
  
}
