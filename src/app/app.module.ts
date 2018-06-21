import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import { UserModule } from './user/user.module';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    CommonUiModule,
    UserModule,
    AppRoutingModule
  ],
  providers   : [],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
