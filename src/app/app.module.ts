import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';

import localeDE from '@angular/common/locales/de';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { HomeModule } from './home/home.module';
registerLocaleData( localeDE );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,
    UtilsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' }, DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
