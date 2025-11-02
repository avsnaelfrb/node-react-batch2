var filterBooksPromise = require("./promise2.js");

console.log("Menjalankan Kondisi 1 (berwarna, 50 halaman)...");
filterBooksPromise(true, 50)
  .then((books) => {
    console.log("Kondisi 1 BERHASIL:", books);
    console.log("\n--------------------------------\n");
  })
  .catch((error) => {
    console.error("Kondisi 1 GAGAL:", error.message);
    console.log("\n--------------------------------\n");
  });

async function runAsyncFilters() {
  console.log("Menjalankan Kondisi 2 (tidak berwarna, 250 halaman)...");
  try {
    const books = await filterBooksPromise(false, 250);
    console.log("Kondisi 2 BERHASIL:", books);
    console.log("\n--------------------------------\n");
  } catch (error) {
    console.error("Kondisi 2 GAGAL:", error.message);
    console.log("\n--------------------------------\n");
  }

  console.log("Menjalankan Kondisi 3 (berwarna, 30 halaman)...");
  try {
    const books = await filterBooksPromise(true, 30);
    console.log("Kondisi 3 BERHASIL:", books);
    console.log("\n--------------------------------\n");
  } catch (error) {
    console.error("Kondisi 3 GAGAL:", error.message);
    console.log("\n--------------------------------\n");
  }
}

runAsyncFilters();
