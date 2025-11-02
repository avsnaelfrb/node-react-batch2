// Soal 1 ==============================================

class Animal {
 
  _name;
  _legs;
  _cold_blooded;

  constructor(name) {
   
    this.name = name;

    this.legs = 4; 
    this._cold_blooded = false; 
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get legs() {
    return this._legs;
  }

  set legs(value) {
    console.log(`(Jumlah kaki ${this.name} diubah menjadi ${value})`);
    this._legs = value;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }

}

console.log("--- Bagian 1.a ---");
var sheep = new Animal("shaun");

console.log(sheep.name); 
console.log(sheep.legs); 
console.log(sheep.cold_blooded); 

sheep.legs = 3; 
console.log(sheep.legs); 

console.log("\n--- Bagian 1.b ---");


class Ape extends Animal {
  constructor(name) {
    super(name); 
    this.legs = 2; 
  }

  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti");

sungokong.yell();
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

console.log("");

var kodok = new Frog("buduk");
kodok.jump();
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);


// Soal 2 ===============================================

/*
Ini adalah function asli (sebagai referensi):

function Clock({ template }) {
  var timer;

  function render() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };
}
*/

// Di bawah ini adalah hasil refactor ke struktur Class
class Clock {
  constructor({ template }) {

    this.template = template;
    this.timer = null;
  }

 
  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }


  stop() {
    clearInterval(this.timer);
  }

  start() {
    
    this.render();
    
    this.timer = setInterval(() => this.render(), 1000);
    
  }
}

console.log("Menjalankan jam (tekan Ctrl + C untuk berhenti)...");
var clock = new Clock({ template: 'h:m:s' });
clock.start();
