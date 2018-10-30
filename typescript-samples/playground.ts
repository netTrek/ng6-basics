
let myList1: Array<number> = [1, 2, 3];
let myList: number[] = [1, 2, 3];

let myFirstname: string = 'Saban';
let myName = 'Saban';
const myAge = 44;

myName = '123';

for (let i = 1; i < 10; i++) {
  console.log(i);
  for (let i = 1; i < 10; i++) {
  }
}

class Human {

  // name: string;
  age: number;

  set weight(value: number) {
    this._weight = value;
  }

  get weight(): number {
    return this._weight;
  }

  private _weight: number

  constructor( public name: string, age: number ) {
    //this.name = name;
    this.age = age;
  }

  sayYourName() {
    console.log(this.name);
  }
}

class Man extends Human {



  constructor( name: string, age: number ) {
    super(name, age);
  }

  sayYourAge() {
    console.log(this.age);
  }

  sayYourName() {
    this.name = 'test' + this.name;
    super.sayYourName();
  }

  paramsPlay( name: string = 'saban', optParam?: boolean, ...names: Array<string|number|Array<any>>) {
    console.log ( names )
  }
}

let m: Man = new Man( 'saban', 44 );
m.weight = 12;

m.paramsPlay('peter', true, 'hans', 'heike');

interface UserPlay {
  firstname: string;
  lastname: string;
  age: number;
}

interface AdminUser extends UserPLay {
  role: number;
}

class MyUser implements AdminUser {

  firstname: string;
  lastname: string;
  age: number;
  role: number;

}

abstract class Enemy {

}

let username = 'saban';
let user = { username }; // { username: username }

// clone imutable
let userList1 = ['hans', 'peter'];
let userList2 = ['heike', 'paula'];
let cloneUser = [...userList1, 'saban', ...userList2];

let adminuser: { roles: number[]; id: number; clicked?: Function} = {
  roles: [1,2,3],
  id: 44
}

adminuser.clicked = function () {
  console.log(this);
}

let newUser = { ...adminuser, id: 12 };

let address = {
  street: 'ova 32',
  zip: 46282,
  city: 'dorsten'
}

let { city, zip } = address;

console.log(zip);

let myFunction = (param1: string) => {
  console.log(param1);
}


let myFunction4 = () => 123;
let myFunction3 = () => {
}
// let multi2 = param1 => param1 * 2
let multi2 = (param1: number) => param1 * 2

let btn = document.getElementById('btn') as HTMLButtonElement;
btn.onclick = function () {
  console.log('ich wurde geclickt', this);
}

class NavBtn {
  constructor(public btn: HTMLButtonElement) {
    this.addEvent();
  }

  private addEvent() {
    this.btn.addEventListener('click',  () => {
      this.goToDash();
    })
  }

  private goToDash() {
    top.location.href = '...';
  }


}
