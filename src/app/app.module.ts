import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { Saban, TestClass } from '../es6.module';
import { UtilsModule } from './utils/utils.module';

import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
import { MSG, MSG_CONF } from './app.token';

registerLocaleData( localeDE );
registerLocaleData( localeFR );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    UtilsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: MSG, useValue: 'angular rocks'},
    {provide: MSG_CONF, useValue: 'config val1', multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    const t: TestClass = new TestClass();
    // console.log( Saban );
  }
}
