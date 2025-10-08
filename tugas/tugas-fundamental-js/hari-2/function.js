// Soal No 1 ------------------------------------------------------------------------------------------
function introduce(name, gender, job, age) {
  var title;

  if (gender === "laki-laki") {
    title = "Pak";
  } else {
    title = "Bu";
  }

  console.log(title + " " + name + " adalah seorang " + job + " yang berusia " + age + " tahun");
}

console.log("=====================================================");
var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);

var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah);

// Soal No 2 ------------------------------------------------------------------------------------------

