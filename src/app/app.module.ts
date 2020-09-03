import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GuidedTourModule, GuidedTourService} from 'ngx-guided-tour';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuidedTourModule
  ],
  providers: [GuidedTourService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
