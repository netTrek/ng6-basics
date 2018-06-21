import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pta-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls  : [ './hello-world.component.scss' ]
} )
export class HelloWorldComponent implements OnInit {

  intervalId: number;
  counter = 0;

  width = 150;

  hrColor = 'red';

  label  = 'Inhalt';
  imgUrl = '../../../assets/img/cat.png';

  htmlStr = 'saban <strong>ünlü</strong><script>alert(\'hello\')</script>';

  constructor () {
  }

  ngOnInit () {

    this.intervalId = window.setInterval ( () => {
      this.counter++;
      console.log ( this.counter );

      if ( this.counter === 3 ) {
        window.clearInterval( this.intervalId );
      }

    }, 1000 );

  }

}
