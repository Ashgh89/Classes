// Classes

class Person {
  constructor(firstName, lastName = "Maxi") {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
//
let p = new Person("Leo", "Messi");
console.log("Hi", p.firstName);

let p1 = new Person("Nelly");
console.log("Hi", p1.firstName, p1.lastName); // Hi Nelly undefined (without default value)

const a = new Person("Mathius", "Lisek");
console.log("Hello", a.firstName, a.lastName);

// 2

class Info {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Method
  greet() {
    console.log("Hi there, How r u?");
  }
}
let x = new Info("Belal", "Aljumaa");
console.log("hi " + x.firstName);

x.greet();

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  // Method
  buyingCar() {
    console.log("Galina has Audi");
  }
  compliment(herName, carName) {
    return `That's a wonderful ${carName}, ${herName}`;
  }
}
let car1 = new Car("Q5", "Red");
console.log(
  `the model of the Audi is ${car1.model} and the color is ${car1.color}`
);

let compliment = car1.compliment("Galina", "Audi");
console.log(compliment);

//
// 1. Create a class

class Personn {
  constructor(firstName, lastName) {
    this.firstName1 = firstName;
    this.lastName1 = lastName;
  }

  fullName() {
    return this.firstName1 + " " + this.lastName1;
  }
}

const y = new Personn("Fuchs", "Müller");
const y1 = new Personn("Saeed", "Kasraei");
// console.log(y.lastName1);
console.log(y1.fullName());

// Properties oder fields
class Person10 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let p10 = new Person10("James", "Bond");
console.log("Hey", p10.firstName);
console.log(`hey ${p10.lastName}`);

p10.firstName = "Ali Reza";
console.log(p10.firstName);
console.log(`Hello ${p10.firstName}`);
console.log(p10);

//-----------

class Cellphone {
  #apple;
  #samsung;
  constructor(apple, samsung) {
    this.#apple = apple;
    this.#samsung = samsung;
  }
}
let m = new Cellphone("Iphone11", "SGalaxy20");
console.log(m.apple);
console.log(m.samsung);

//
class Color {
  #firstColor;
  #secondColor;
  constructor(firstColor, secondColor) {
    this.#firstColor = firstColor;
    this.#secondColor = secondColor;
  }
  // Getter and Setter
  //---------------
  // get
  // starts with get
  // No parameters
  // return
  get firstColor() {
    return this.#firstColor;
  }

  // set
  // starts with set
  // take parameter
  // no return
  set firstColor(firstColor) {
    this.#firstColor = firstColor;
  }
}
console.log("********************");
let k = new Color("Orange", "Brown");
console.log(k.firstColor);
console.log(k.secondColor);
k.firstColor = "Blue";
console.log(k.firstColor);

// Date => Built in

const date = new Date();
console.log(date.getFullYear());

// Practice
const num1 = 4;
const num2 = -2;
console.log(!(num1 > 0 || num2 > 0)); //

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let text = "JavaScript and React, but i like React";
let myLength = text.length;
console.log(myLength);

// indexOf
console.log(text.lastIndexOf("React")); //

console.log(text.slice(3, 6)); // aSc

const letters = ["A", "B", "C", "D", "E"];
const result = letters.slice(1, 3);
console.log(result); // B C

//
console.log(new Date().toString());

// extend and super
class Person22 {
  constructor(name, age) {
    this.name1 = name;
    this.age = age;
  }
  atWork() {
    return this.name1 + " is at work ";
  }
  atHome() {
    return this.name1 + " is at home";
  }
  sleeping() {
    return this.name1 + " is sleeping";
  }
}
class Person100 extends Person22 {
  constructor(name12, age) {
    super(name12, age);
  }
  profession() {
    return this.name12 + " is my Artist";
  }
  doTask() {
    return super.atWork() + this.profession();
  }
}

const z = new Person100("Tim", 33);
console.log(z.atHome());

// Practice 2

const languages = ["Git", "HTML", "CSS", "JS", "React"];
// slice(start)
// slice (start, end)
console.log(languages.slice(1, 2)); //

// splice
let myNum = ["1", "2", "3", "4"];
myNum.splice(1, 3, 70, 44); //
console.log(myNum);
