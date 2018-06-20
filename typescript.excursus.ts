// deaktiviere Linter, weil dieses Dokument im Playground enstanden ist

/* tslint:disable */

let firstname: string = 'saban';
let lastname = 'ünlü';

export interface iuser {
  name: string;          // optional mit ? name?: string;
  age: number|null;       // alternative Typen
}

// export class User implements iuser {
//    name: string;
//    age: number | null = null;
//    constructor(name?: string, age?: number | null) {
//        this.name = name;
//        this.age = age;
//    }
//}

export class User implements iuser {
  constructor(public name: string,
              public age: number | null) { }
}

let user: { name: string, age: number };
user.age = 12;

//let user2: iuser = {
//    age: 44
//}

//let user2: User = new User();
// user.age = 123;
// user.name = 'aaa';

let user3: User = new User('saban', 123);


let funct1: Function = () => { console.log('hello') };
let funct2: Function = (msg) => { console.log( msg ) };
let funct3: Function = (msg) => msg ;
let funct4: Function = msg => { console.log(msg) };

export class LoginButton {
  msg: string = '';
  constructor(private button: HTMLButtonElement) {
    this.addEventListener2();
  }

  private addEventListener() {
    let _this = this;
    this.button.addEventListener('click', function (mouseEvent) {
      console.log(_this, mouseEvent);
    })
  }


  private addEventListener2() {

    this.button.addEventListener('click', mouseEvent =>  {
      console.log ( this, mouseEvent );
    })
  }

  private func1(param1: number, param2?: number) { //? opt. parameter

  }


  private func2(param1: number, param2: number = 1 ) { //? opt. parameter

  }


  private func3(param1: number, param2: number, ...params ) { //? opt. parameter

  }
}

let button: HTMLButtonElement = document.getElementById('btn') as HTMLButtonElement;
let myButton = new LoginButton(button);


let user4: { name: string, age: number } = { name: 'saban', age: 123 };
let { age, ...obj } = user4; // generiert obj.name

let list1 = [1, 2, 3];      // 1,2,3
let list2 = [...list1, 4]   // 1,2,3,4
let list3 = [4, ...list1]  // 4, 1, 2, 3

let user5 = { zip: 46282, ...user4 }

// class constructor
function Car(name) {
  this.id = null;
  this.name = name;
}

Car.prototype.drive = function () {
  console.log(this.name, this.id);
}

console.log(new Car('BMW'));

function BMW() {
  Car.call(this, 'BMW');
}
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW

class Book {
  id: number;
  constructor ( public name: string ) {}

  sayYourName() {
    return this.name;
  }
}

class SciFy extends Book {
  constructor( name: string ) {
    super ( name )
  }
}


abstract class Article {
  id: number;
  name: string;

  sayYourName() {
    console.log(this.name);
  }

  abstract doSpec (): number;
}

class Bike extends Article {

  doSpec(): number {
    return 123;
  }

}

let b = new Bike();



let val1 = 123;
let val2 = 123;

let prop3 = 123;
let prop4 = 123;

let user6: { prop1: number, prop2: number } = { prop1: val1, prop2: val2 };
let user7: { prop3?: number, prop4: number } = { prop4 };
