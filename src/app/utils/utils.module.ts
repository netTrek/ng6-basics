import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger.directive';
import { GaEventDirective } from './ga-event.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, DangerDirective, GaEventDirective, ReversePipe],
  exports: [CountdownComponent, DangerDirective, GaEventDirective, ReversePipe]
})
export class UtilsModule { }
