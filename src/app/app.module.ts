import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import { UserModule } from './user/user.module';

import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';

registerLocaleData(localeDE);

@NgModule ( {
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    ContactComponent,
    ContactFormComponent,
    ContactMapComponent
  ],
  imports     : [
    BrowserModule,
    CommonUiModule,
    UserModule,
    AppRoutingModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de-ch' },
    AppService
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
