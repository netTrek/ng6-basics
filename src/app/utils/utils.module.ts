import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, DangerDirective],
  exports: [CountdownComponent, DangerDirective]
})
export class UtilsModule { }
