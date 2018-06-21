import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule ( {
  imports     : [
    CommonModule
  ],
  declarations: [ HelloWorldComponent, CountDownComponent ],
  exports     : [ HelloWorldComponent, CountDownComponent ]
} )
export class CommonUiModule {
}
