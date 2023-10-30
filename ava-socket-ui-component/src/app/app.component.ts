import { Component } from '@angular/core';
import { ChatboxService } from './chatbox.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';

constructor(public chatService: ChatboxService) {}  
  
}
