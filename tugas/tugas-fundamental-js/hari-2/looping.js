// Soal No 1 ------------------------------------------------------------------------------------------
var increment = 1;
var decrement = 20;

console.log("=====================================================");

console.log("LOOPING PERTAMA");
while (increment <= 20) {
  console.log(increment + " - I love coding");
  increment++;
}
console.log("  ");
console.log("LOOPING KEDUA");
while (decrement >= 1) {
  console.log(decrement + " - I will become a fullstack developer");
  decrement--;
}

console.log("=====================================================");

// Soal No 2 ------------------------------------------------------------------------------------------
for (angka = 1; angka <= 20; angka++) {
  if (angka % 2 === 0) {
    console.log(angka + " - GENAP");
  } else {
    console.log(angka + " - GANJIL");
  }
}

console.log("=====================================================");

// Soal No 3 ------------------------------------------------------------------------------------------

for (var angka = 1; angka <= 20; angka++) {
  if (angka % 3 === 0) {
    if (angka % 2 !== 0) {
      console.log(angka + " - I Love Coding");
    } else {
      console.log(angka + " - ToT");
    }
  } else {
    if (angka % 2 !== 0) {
      console.log(angka + " - Santai");
    } else {
      console.log(angka + " - Berkualitas");
    }
  }
}

console.log("=====================================================");

// Soal No 4 ------------------------------------------------------------------------------------------
var tinggi = 7;
for (var i = 1; i <= tinggi; i++) {
    var baris = "";
    for (var j = 1; j <= i; j++) {
        baris += "#";
    }
    console.log(baris);
}

console.log("=====================================================");

// Soal No 5 ------------------------------------------------------------------------------------------
