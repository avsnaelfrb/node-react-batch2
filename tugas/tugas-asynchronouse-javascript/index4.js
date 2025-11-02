var filterCarsPromise = require("./promise3.js");

function printSeparator() {
  console.log("\n--------------------------------\n");
}

console.log("Menjalankan Kondisi 1 (hitam, 2019)...");
filterCarsPromise("black", 2019)
  .then((cars) => {
    console.log("Kondisi 1 BERHASIL:", cars);
    printSeparator();
  })
  .catch((error) => {
    console.error("Kondisi 1 GAGAL:", error.message);
    printSeparator();
  });

console.log("Menjalankan Kondisi 2 (silver, 2017)...");
filterCarsPromise("silver", 2017)
  .then((cars) => {
    console.log("Kondisi 2 BERHASIL:", cars);
    printSeparator();
  })
  .catch((error) => {
    console.error("Kondisi 2 GAGAL:", error.message);
    printSeparator();
  });

async function runAsyncCarFilters() {
  console.log("Menjalankan Kondisi 3 (abu-abu, 2019)...");
  try {
    const cars = await filterCarsPromise("grey", 2019);
    console.log("Kondisi 3 BERHASIL:", cars); 
    printSeparator();
  } catch (error) {
    console.error("Kondisi 3 GAGAL:", error.message); 
    printSeparator();
  }

  console.log("Menjalankan Kondisi 4 (abu-abu, 2018)...");
  try {
    const cars = await filterCarsPromise("grey", 2018);
    console.log("Kondisi 4 BERHASIL:", cars); 
    printSeparator();
  } catch (error) {
    console.error("Kondisi 4 GAGAL:", error.message);
    printSeparator();
  }

  console.log("Menjalankan Kondisi 5 (hitam, 2020)...");
  try {
    const cars = await filterCarsPromise("black", 2020);
    console.log("Kondisi 5 BERHASIL:", cars);
    printSeparator();
  } catch (error) {
    console.error("Kondisi 5 GAGAL:", error.message);
    printSeparator();
  }
}

runAsyncCarFilters();
