'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to a prptotype
// 4. function automatically return {}

// const maltida = new Person('Maltida', 2017);
// const jack = new Person('Jack', 1975);
// console.log(maltida, jack);

// Person.hey = function () {
//   console.log('Hey there');
//   console.log(this);
// };

// Person.hey();

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// maltida.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(maltida));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, maltida.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);

// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

//////////////////////////////////////////
// Coding Challenge #1

// const Car = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.maker} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.maker} is going at ${this.speed} km/h`);
// };

// const Car1 = new Car('BMW', 120);
// const Car2 = new Car('Mercedes', 95);

// Car1.accelerate();
// Car1.brake();
// Car2.accelerate();
// Car2.brake();
// console.log(Car1);
// console.log(Car2);
// console.log(Car1.__proto__ === Car.prototype);

// Class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// // 1. Classes are not hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are excuted in strict mode

// const walter = new PersonCl('Walter James', 1965);

// PersonCl.hey();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// ///////////////////////////////////////////////////////////
// // Challenge #2

// class CarCl {
//   constructor(carName, carSpeed) {
//     this.carName = carName;
//     this.carSpeed = carSpeed;
//   }

//   accelerate() {
//     this.carSpeed = this.carSpeed + 10;
//     console.log(`${this.carName} is going at ${this.carSpeed} km/h`);
//   }

//   brake() {
//     this.carSpeed = this.carSpeed - 5;
//     console.log(`${this.carName} is going at ${this.carSpeed} km/h`);
//   }

//   get speedUS() {
//     return this.carSpeed / 1.6;
//   }

//   set speedUS(speed) {
//     this.carSpeed = speed * 1.6;
//   }
// }

// const newCar = new CarCl('Ford', 120);

// console.log(newCar.speedUS);
// console.log(newCar);
// newCar.accelerate();
// newCar.brake();
// newCar.speedUS = 50;
// console.log(newCar);

///////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__.__proto__ === Person.prototype);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

/////////////////////////////////////////////////////////////////
///// Challenge #3

// const CarCl = function (carName, carSpeed) {
//   this.carName = carName;
//   this.carSpeed = carSpeed;
// };

// CarCl.prototype.accelerate = function () {
//   this.carSpeed = this.carSpeed + 10;
//   console.log(`${this.carName} is going at ${this.carSpeed} km/h`);
// };

// CarCl.prototype.brake = function () {
//   this.carSpeed = this.carSpeed - 5;
//   console.log(`${this.carName} is going at ${this.carSpeed} km/h`);
// };

// const EV = function (carName, carSpeed, charge) {
//   CarCl.call(this, carName, carSpeed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(CarCl.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.carSpeed += 20;
//   this.charge = this.charge - this.charge * 0.01;
//   console.log(
//     `${this.carName} is going at ${
//       this.carSpeed
//     } with a battery charged of ${Math.trunc(this.charge)}%`
//   );
// };

// const corrolla = new EV('Benz', 100, 70);
// corrolla.accelerate();
// corrolla.brake();
// corrolla.chargeBattery(90);
// console.log(corrolla);
// corrolla.accelerate();

// Inheritance Between "Classes": ES6 Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there');
//   }
// }

// class StudentCl extends PersonCl {
//   // Always needs to hhappen first
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like a ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2023, 'Computer Science');

// martha.introduce();
// martha.calcAge();

/////////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer');
// jay.introduce();
// jay.calcAge();

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }

    return this;
  }

  static helper() {
    console.log(`Helper`);
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

Account.helper();
console.log(acc1);
// console.log(acc1.#movements);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
