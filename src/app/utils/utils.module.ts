import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, DangerDirective, ReversePipe],
  exports: [CountdownComponent, DangerDirective, ReversePipe]
})
export class UtilsModule { }
