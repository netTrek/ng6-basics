import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger.directive';
import { GaEventDirective } from './ga-event.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, DangerDirective, GaEventDirective],
  exports: [CountdownComponent, DangerDirective, GaEventDirective]
})
export class UtilsModule { }
