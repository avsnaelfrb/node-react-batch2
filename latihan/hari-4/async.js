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

// promise

var isMomHappy = true;

var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone); // fulfilled
  } else {
    var reason = new Error("mom is not happy");
    reject(reason); // reject
  }
});

var askMom = function () {
  willIGetNewPhone
    .then(function (fulfilled) {
      // yay, you got a new phone
      console.log(fulfilled);
    })
    .catch(function (error) {
      // oops, mom don't buy it
      console.log(error.message);
    });
};

askMom();
