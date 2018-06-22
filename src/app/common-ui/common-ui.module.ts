import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ReversePipe } from './reverse.pipe';

@NgModule ( {
  imports     : [
    CommonModule
  ],
  declarations: [ HelloWorldComponent, CountDownComponent, ReversePipe ],
  exports     : [ HelloWorldComponent, CountDownComponent, ReversePipe ]
} )
export class CommonUiModule {
}
