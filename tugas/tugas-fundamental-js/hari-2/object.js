//soal no 1 --------------------------------------------------------------------------------------
console.log("SOAL NO 1");
console.log("=====================================================");
var buah = [
  { nama: "nanas", warna: "kuning", adabijinya: "tidak", harga: 9000 },
  { nama: "jeruk", warna: "orange", adabijinya: "ada", harga: 8000 },
  { nama: "semangka", warna: "hijau", adabijinya: "ada", harga: 10000 },
  { nama: "pisang", warna: "kuning", adabijinya: "tidak", harga: 5000 },
];

var buahYangTidakAdaBiji = buah.filter((buah) => {
  return buah.adabijinya === "tidak";
});
console.log(buahYangTidakAdaBiji);

//soal no 2 --------------------------------------------------------------------------------------
console.log("SOAL NO 2");
console.log("=====================================================");

var daftarFilm = [];

function tambahFilm(nama, durasi, genre, tahun) {
  var filmBaru = {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  };
  daftarFilm.push(filmBaru);
}

tambahFilm("LOTR", "2 jam", "action", "1999");
tambahFilm("avenger", "2 jam", "action", "2019");
tambahFilm("spiderman", "2 jam", "action", "2004");
tambahFilm("juon", "2 jam", "horror", "2004");
console.log(daftarFilm);

//soal no 3 --------------------------------------------------------------------------------------
console.log("SOAL NO 3");
console.log("=====================================================");
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

var umurDiatas29 = people.filter((person) => {
  return person.age > 29;
});

console.log(umurDiatas29);

//soal no 4 --------------------------------------------------------------------------------------
console.log("SOAL NO 4");
console.log("=====================================================");
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

let totalUmur = 0;

people.forEach((orang) => {
  return (totalUmur += orang.age);
});

console.log("total umur: " + totalUmur);
let rataRataUmur = people.age > 0 ? totalUmur / people.length : 0;
console.log("Rata-rata umur adalah:", rataRataUmur);

//soal no 5 --------------------------------------------------------------------------------------
console.log("SOAL NO 5");
console.log("=====================================================");

var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

people.sort((a, b) => a.age - b.age);

console.log("Hasil pengurutan berdasarkan umur:");
people.forEach((person, index) => {
  console.log(`${index + 1}. ${person.name}`);
});

//soal no 6 --------------------------------------------------------------------------------------
console.log("SOAL NO 6");
console.log("=====================================================");

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020,
};

function addColors(newColor) {
  phone.colors.push(newColor);
}

addColors("Gold");
addColors("Silver");
addColors("Brown");

console.log(phone);