// Soal No 1 ------------------------------------------------------------------------------------------
function introduce(name, gender, job, age) {
  var title;

  if (gender === "laki-laki") {
    title = "Pak";
  } else {
    title = "Bu";
  }

  console.log(
    title +
      " " +
      name +
      " adalah seorang " +
      job +
      " yang berusia " +
      age +
      " tahun"
  );
}

console.log("=====================================================");

var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah);

// Soal No 2 ------------------------------------------------------------------------------------------

function cariKarakterUnik(teks) {
  const teksKecil = teks.toLowerCase();

  const hitungan = {};

  for (let i = 0; i < teksKecil.length; i++) {
    const karakter = teksKecil[i];

    if (karakter === " ") {
      continue;
    }

    if (hitungan[karakter]) {
      hitungan[karakter]++;
    } else {
      hitungan[karakter] = 1;
    }
  }

  let hasil = "";

  for (const karakter in hitungan) {
    if (hitungan[karakter] === 1) {
      hasil += karakter;
    }
  }

  return hasil;
}

var text = "Super Bootcamp Fullstack Dev 2022";

console.log("=====================================================");
const unik = cariKarakterUnik(text);
console.log(unik);

// Soal No 3 ------------------------------------------------------------------------------------------

function findMinMax(arr) {
  if (arr.length === 0) {
    return "Array kosong";
  }

  let terbesar = arr[0];
  let terkecil = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }

    if (arr[i] < terkecil) {
      terkecil = arr[i];
    }
  }

  return `angka terbesar adalah ${terbesar} dan angka terkecil adalah ${terkecil}`;
}

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
var hasilMinMax = findMinMax(angka);

console.log("=====================================================");
console.log(hasilMinMax);

// Soal No 4 ------------------------------------------------------------------------------------------

function arrangeString(str) {
  return str.split("").sort().join("");
}

console.log("=====================================================");
console.log(arrangeString("bahasa"));
console.log(arrangeString("similikiti"));
console.log(arrangeString("sanbercode"));
console.log(arrangeString(""));

// Soal No 5 ------------------------------------------------------------------------------------------

function palindrome(kata) {
  var reversed = kata.split("").reverse().join("");
  return kata === reversed;
}

console.log("=====================================================");
console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("nababan"));
console.log(palindrome("haji ijah"));
console.log(palindrome("mister"));

// soal No 6 ------------------------------------------------------------------------------------------

function angkaPalindrome(num) {
  let currentNum = num + 1;

  while (true) {
    let numStr = String(currentNum);
    let reversedStr = numStr.split("").reverse().join("");

    if (numStr === reversedStr) {
      return currentNum;
    }

    currentNum++;
  }
}

console.log("=====================================================");
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// Soal No 7 ------------------------------------------------------------------------------------------

function cekPermutasi(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log("=====================================================");
console.log(cekPermutasi("abah", "baha"));
console.log(cekPermutasi("ondel", "delon")); 
console.log(cekPermutasi("paul sernine", "arsene lupin")); 
console.log(cekPermutasi("taco", "taca")); 
