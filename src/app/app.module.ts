import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import { UserModule } from './user/user.module';

import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDE);

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
  providers   : [
    { provide: LOCALE_ID, useValue: 'de-ch' }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
