//Asynchronous
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
console.log("This prints first");

//Callback
function periksaDokter(nomerAntri, callback) {
  if (nomerAntri > 50) {
    callback(false);
  } else if (nomerAntri < 10) {
    callback(true);
  }
}

periksaDokter(65, function (check) {
  if (check) {
    console.log("sebentar lagi giliran saya");
  } else {
    console.log("saya jalan jalan dulu");
  }
});

