import { Component } from '@angular/core';

@Component({
  selector: 'msg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createAt = new Date();
  num = Math.PI;
  title = 'msg';
}
