// soal 1------------------------------------------------------------

const PI = 3.14159; 

const hitungLuasLingkaran = (r) => {
    return PI * r * r; 
};
const hitungKelilingLingkaran = (r) => {
    return 2 * PI * r;
};

console.log("=====================================================================================")
console.log("SOAL 1")
const jariJari = 10;
console.log(`Luas Lingkaran (r=${jariJari}): ${hitungLuasLingkaran(jariJari).toFixed(2)}`); 
console.log(`Keliling Lingkaran (r=${jariJari}): ${hitungKelilingLingkaran(jariJari).toFixed(2)}`); 
console.log("=====================================================================================")

//soal 2---------------------------------------------------------------

const introduce = (...data) => {
    
    const nama = data[0];
    const usia = data[1];
    const gender = data[2].toLowerCase(); 
    const pekerjaan = data[3];
    
    const sapaan = gender === "perempuan" ? "bu" : "pak";
    
    return `${sapaan} ${nama} adalah seorang ${pekerjaan} yang berusia ${usia} tahun`;
};

console.log("SOAL 2")
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn) 

const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")
console.log(perkenalanSarah)
console.log("=====================================================================================")

//soal 3-------------------------------------------------------------------------
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        
        fullName(){
            console.log(firstName + " " + lastName)
        }
    }
}

console.log("SOAL 3")
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()
console.log("=====================================================================================")

//soal 4---------------------------------------------------------------------------

let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const {
    brand: phoneBrand,        
    name: phoneName,          
    year,                     
    colors: [colorBronze, , colorBlack] 
} = phone;

console.log("SOAL 4")
console.log(phoneBrand, phoneName,",", year, colorBlack, colorBronze)
console.log("=====================================================================================")

//soal 5------------------------------------------------------

let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul, ...warna],
};

console.log("SOAL 5");
console.log(buku);
console.log(
  "====================================================================================="
);

//soal 6 ------------------------------------------------------

function addProducts(samsungObject, newProductList) {
  return {
    ...samsungObject,
    products: [
      ...samsungObject.products,
      ...newProductList
    ]
  };
}


let samsung = {
  name: "Samsung",
  products: [
    { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
    { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
    { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] }
  ]
}

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] }
]

samsung = addProducts(samsung, newProducts)

console.log("SOAL 6");
console.log(samsung)
console.log(
  "====================================================================================="
);

//soal 7 ------------------------------------------------------

const konversiData = ([nama, domisili, umur]) => ({
  nama,
  domisili,
  umur
});

let data = ["Bondra", "Medan", 25]
console.log("SOAL 7");
console.log(konversiData(data))
console.log(
  "====================================================================================="
);

//soal 8 ------------------------------------------------------

const graduate = (...studentArrays) => {
  
  const allStudents = studentArrays.reduce((acc, currentArr) => [
    ...acc,
    ...currentArr
  ], []);

  return allStudents.reduce((groups, student) => {
    const { name, class: className } = student;
    
    if (!groups[className]) {
      groups[className] = [];
    }
    
    groups[className].push(name);
    
    return groups; 
  }, {});
};

const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" }
]


console.log("SOAL 8");
console.log("--- graduate(data1) ---");
console.log(graduate(data1));

console.log("\n--- graduate(data2) ---");
console.log(graduate(data2));

console.log("\n--- graduate(data1, data2) ---");
console.log(graduate(data1, data2));
console.log(
  "====================================================================================="
);