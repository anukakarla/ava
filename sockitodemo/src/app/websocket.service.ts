import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket:any;
readonly uri: string ="http://localhost:8080/ws";
  constructor() { 
    // this.socket=io(this.uri);
  }

  listen(eventName:string){
    return new Observable((Subscriber:any)=>{
      this.socket.on(eventName,(data:any)=>{
        Subscriber.next(data);
      })
    });
  }

  emit(eventName:string,data:any){
    this.socket.emit(eventName,data);

}
}
