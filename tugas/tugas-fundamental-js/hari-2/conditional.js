// Soal No 1 ------------------------------------------------------------------------------------------
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if (sentence.length <= 10){
    console.log("=====================================================")
    console.log("Pendek")
} else if (sentence.length >= 10 && sentence.length <= 30){
    console.log("=====================================================")
    console.log("Sedang")
} else {
    console.log("=====================================================")
    console.log("Panjang")
}

// Soal No 2 ------------------------------------------------------------------------------------------
var nilai = 75;

if (nilai >= 80) {
    console.log("=====================================================")
    console.log("Indeksnya A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("=====================================================")
    console.log("Indeksnya B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("=====================================================")
    console.log("Indeksnya C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("=====================================================")
    console.log("Indeksnya D")
} else {
    console.log("=====================================================")
    console.log("Indeksnya E")
}

// Soal No 3 ------------------------------------------------------------------------------------------
var tanggal = 10;
var bulan = 10;
var tahun = 2006;

switch(bulan) {
    case 1: { console.log("=====================================================")
              console.log(tanggal + " Januari " + tahun); break; }
    case 2: { console.log("=====================================================")
              console.log(tanggal + " Februari " + tahun); break; }
    case 3: { console.log("=====================================================")
              console.log(tanggal + " Maret " + tahun); break; }
    case 4: { console.log("=====================================================")
              console.log(tanggal + " April " + tahun); break; }
    case 5: { console.log("=====================================================")
              console.log(tanggal + " Mei " + tahun); break; }
    case 6: { console.log("=====================================================")
              console.log(tanggal + " Juni " + tahun); break; }
    case 7: { console.log("=====================================================")
              console.log(tanggal + " Juli " + tahun); break; }
    case 8: { console.log("=====================================================")
              console.log(tanggal + " Agustus " + tahun); break; }
    case 9: { console.log("=====================================================")
              console.log(tanggal + " September " + tahun); break; }
    case 10: { console.log("=====================================================")
               console.log(tanggal + " Oktober " + tahun); break; }
    case 11: { console.log("=====================================================")
               console.log(tanggal + " November " + tahun); break; }
    case 12: { console.log("=====================================================")
               console.log(tanggal + " Desember " + tahun); break; }
}   
