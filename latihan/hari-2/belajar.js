console.log("=====================================================")
var minimarketStatus = "open"

if (minimarketStatus == "open") {
    console.log("saya akan membeli telur dan buah")
} else {
    console.log("minimarketnya tutup")
}

console.log("=====================================================")

var minuteRemainingToOpen = 4 

if (minimarketStatus != "open") {
    console.log("saya akan membeli telur dan buah")
} else if (minuteRemainingToOpen <= 5) {
    console.log("minimarket buka sebentar lagi, saya tunggu")
} else {
    console.log("minimarketnya tutup, saya pulang lagi")
}

console.log("=====================================================")

var umur = 15

var cekKTP = (umur >= 17) ? "boleh buat KTP" : "belum boleh buat KTP"
console.log(cekKTP)

console.log("=====================================================")

