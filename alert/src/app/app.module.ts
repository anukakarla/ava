import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertserviceService } from './alertservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlertserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
