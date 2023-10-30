import { Component } from '@angular/core';
import { AlertserviceService } from './alertservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alert';
  constructor(public message:AlertserviceService){

  }
}
