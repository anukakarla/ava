import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  username = '';
  selectedTheme = '';
  selectedAvatar = '';
  isReady = false;
  themes = ['primary', 'warning', 'info', 'success'];
  avatars = [
    'https://mir-s3-cdn-cf.behance.net/user/115/24e8af100183223.59cbd13b396ba.png',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/default.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs3.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs4.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs5.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs6.png?raw=true',
    'https://github.com/Houssem-Selmi/booki/blob/master/Booki-Back-end/upload-dir/hs7.png?raw=true'
  ];


  constructor(private _router: Router) {
    this.selectedTheme = this.getTheme();
    this.selectedAvatar = this.getAvatar();
  }

  getTheme() {
    return this.themes[Math.floor(Math.random() * this.themes.length)];
  }

  getAvatar() {
    return this.avatars[Math.floor(Math.random() * this.avatars.length)];
  }

  chat() {
    this.isReady = true;
  }
}
