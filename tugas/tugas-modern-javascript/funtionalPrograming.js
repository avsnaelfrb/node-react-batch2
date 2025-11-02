//soal 1 --------------------------------------------------------
function hitungPersegi(sisi) {
  function hitungLuas(s) {
    return s * s;
  }
  function hitungKeliling(s) {
    return 4 * s;
  }

  console.log(
    "==============================================================="
  );
  console.log("luas persegi adalah:" + hitungLuas(sisi));
  console.log("keliling persegi adalah:" + hitungKeliling(sisi));
  console.log(
    "---------------------------------------------------------------"
  );
}

function hitungPersegiPanjang(panjang, lebar) {
  function hitungLuasPP(p, l) {
    return p * l;
  }
  function hitungKelilingPP(p, l) {
    return 2 * p + 2 * l;
  }

  console.log("luas persegi panjang adalah:" + hitungLuasPP(panjang, lebar));
  console.log(
    "keliling persegi panjang adalah:" + hitungKelilingPP(panjang, lebar)
  );
  console.log(
    "==============================================================="
  );
}

console.log(`\n`);
console.log("soal 1");
hitungPersegi(8);
hitungPersegiPanjang(12, 7);
console.log(`\n`);

//soal 2 --------------------------------------------------------

function hitungKubus(sisi) {
  function hitungVolumeK(s) {
    return s * s * s;
  }
  function hitungLuasPermukaanK(s) {
    return 6 * s * s;
  }

  console.log("volume kubus adalah: " + hitungVolumeK(sisi));
  console.log("luas permukaan kubus adalah: " + hitungLuasPermukaanK(sisi));
  console.log(
    "---------------------------------------------------------------"
  );
}

function hitungBalok(panjang, lebar, tinggi) {
  function hitungVolumeB(p, l, t) {
    return p * l * t;
  }
  function hitungLuasPermukaanB(p, l, t) {
    return 2 * (p * l + p * t + t * l);
  }

  console.log("volume balok adalah: " + hitungVolumeB(panjang, lebar, tinggi));
  console.log(
    "luas permukaan balok adalah: " +
      hitungLuasPermukaanB(panjang, lebar, tinggi)
  );
  console.log(
    "==============================================================="
  );
}

console.log("soal 2");
console.log("===============================================================");
hitungKubus(8);
hitungBalok(12, 7, 5);
console.log(`\n`);

//soal 3 --------------------------------------------------------

function filterByAgeRecursive(num) {
  let people = [
    { name: "John", job: "Programmer", gender: "male", age: 30 },
    { name: "Sarah", job: "Model", gender: "female", age: 27 },
    { name: "Jack", job: "Engineer", gender: "male", age: 25 },
    { name: "Ellie", job: "Designer", gender: "female", age: 35 },
    { name: "Danny", job: "Footballer", gender: "male", age: 30 },
  ];

  const sortedPeople = people.sort((a, b) => a.age - b.age);

  function display(data, currentIndex) {
    if (currentIndex >= num || currentIndex >= data.length) {
      return;
    }
    console.log(currentIndex + 1 + "." + data[currentIndex].name);
    display(data, currentIndex + 1);
  }

  display(sortedPeople, 0);
}

console.log("soal 3");
console.log("===============================================================");
filterByAgeRecursive(5);
console.log(`\n`);

//soal 4 --------------------------------------------------------

var phones = [
  {
    name: "Samsung Galaxy A52",
    brand: "Samsung",
    year: 2021,
    colors: ["black", "white"],
  },
  {
    name: "Redmi Note 10 Pro",
    brand: "Xiaomi",
    year: 2021,
    colors: ["white", "blue"],
  },
  {
    name: "Redmi Note 9 Pro",
    brand: "Xiaomi",
    year: 2020,
    colors: ["white", "blue", "black"],
  },
  { name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"] },
  {
    name: "Iphone 11",
    brand: "Apple",
    year: 2019,
    colors: ["gold", "black", "silver"],
  },
];

const phonesWithBlackColor = [];

for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  if (phone.colors.includes("black")) {
    phonesWithBlackColor.push(phone);
  }
}

const sortedPhones = phonesWithBlackColor.sort(function (a, b) {
  return a.year - b.year;
});

function tampilkanPhones(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }

  const phone = arr[index];

  const colorsString = phone.colors.join(", ");
  console.log(
    [index + 1] +
      ". " +
      phone.name +
      ", " +
      "colors available : " +
      colorsString
  );
  tampilkanPhones(arr, index + 1);
}

console.log("soal 4");
console.log("===============================================================");
console.log("Daftar handphone warna hitam (diurutkan berdasarkan tahun):");
tampilkanPhones(sortedPhones);

