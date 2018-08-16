import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  goToUser () {
    this.route.navigate( [ 'user', 1 ] );
  }
}
