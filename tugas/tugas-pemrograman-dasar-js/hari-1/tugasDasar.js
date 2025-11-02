// soal 1 -------------------------------------------------------------------------------------
var perkenalan = 'Nama saya ';
var nama = "Elfaro, "
var kata1 = "saya "
var kata2 = "berharap "
var kata3 = "untuk "
var kata4 = "menjadi "
var kata5 = "seorang "
var kata6 = "software "
var kata7 = "engineer. "

console.log("====================================================================================")
console.log(perkenalan + nama + kata1 + kata2 + kata3 + kata4 + kata5 + kata6 + kata7)
console.log("====================================================================================")

//soal 2 -------------------------------------------------------------------------------------

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)
console.log("====================================================================================")

//soal 3 -------------------------------------------------------------------------------------

var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4,14);
var thirdWord2 = sentence2.substring(15, 17); 
var fourthWord2 = sentence2.substring(18, 20); 
var fifthWord2 = sentence2.substring(21);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log("====================================================================================")

//soal 4 -------------------------------------------------------------------------------------

var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence2.substring(4,14);
var thirdWord3 = sentence2.substring(15, 17); 
var fourthWord3 = sentence2.substring(18, 20); 
var fifthWord3 = sentence2.substring(21);

var firstWordLength = exampleFirstWord3.length
var secondWordLength = secondWord3.length
var thridWordLength = thirdWord3.length
var fourtWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length
// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thridWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourtWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);
console.log("====================================================================================")

//soal 5 -------------------------------------------------------------------------------------

// 1. password pertama : HELLO
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")
console.log("kode 3: " + kode3)
console.log("====================================================================================")

//soal 6 -------------------------------------------------------------------------------------

var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

//gabungkan variabel-variabel tersebut agar menghasilkan output
//Saya SenanG BelajaR JAVASCRIPT
console.log( pertama.charAt(0).toUpperCase() + pertama.substring(1) + ' ' + kedua.charAt(0).toUpperCase() + kedua.substring(1, 5) + kedua.charAt(5).toUpperCase() + ' ' + ketiga.charAt(0).toUpperCase() + ketiga.substring(1, 6) + ketiga.charAt(6).toUpperCase() + ' ' + keempat.toUpperCase())
console.log("====================================================================================")

//soal 7 -------------------------------------------------------------------------------------

var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

luasPersegiPanjang = Number(panjang) * Number(lebar) 
luasSegitiga = 1/2 * Number(alas) * Number(tinggi) 
console.log(luasPersegiPanjang)
console.log(luasSegitiga)
console.log("====================================================================================")

//soal 8 -------------------------------------------------------------------------------------

var sisi = "1 2";
var jariJari= "7.5";
var sisi = sisi.replace(' ', '') 

luasPersegi = parseInt(sisi) * parseInt(sisi)
luasLingkaran = 22/7 * parseFloat(jariJari)

console.log(luasPersegi)
console.log(luasLingkaran)
console.log("====================================================================================")

