import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './components/action/action.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';

import * as fromReducer from '@ngrx/store/'

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ counter: fromReducer.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
