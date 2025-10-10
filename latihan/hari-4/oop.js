class car {
  constructor(brand, factory) {
    this.brand = brand;
    this.factory = factory;
    this.sound = "honk! honk! vromvrom";
    this.color = "";
  }

  get getColor() {
    return this.color;
  }

  set setColor(c) {
    this.color = c;
  }

  present() {
    return "i have a " + this.brand + " from " + this.factory;
  }

  static hello() {
    return "hello word";
  }
}

var innovam = new car("Innovam", "toyotwo");
innovam.setColor = "red";
var honde = new car("mitsubisi", "mobil listrik");
console.log(innovam);
console.log("");
console.log(innovam.present());
console.log("");
console.log(honde);
console.log("");
console.log(car.hello());

class Person {
  constructor(name) {
    this.name = name;
    this.age = "";
  }

  berjalan() {
    return "tap tap tap";
  }
}

class Guru extends Person {
  constructor(name, ) {
    super(name);
    this.schooll = "";
  }
}

var guru = new Guru("Abidin");
guru.age = 20;
guru.schooll = "SMK TELKOM";
console.log(guru);
console.log(guru.berjalan());
