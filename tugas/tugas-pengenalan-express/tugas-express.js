const express = require('express')
const app = express()
const port = 3000

// Konstanta PI
const PI = 3.14159;

// ==========================================================
// SOAL 1: Lingkaran dan Tabung (Menggunakan URL Parameter)
// Path: /lingkaran-tabung/:jariJari/:tinggi
// ==========================================================
app.get("/lingkaran-tabung/:jariJari/:tinggi", (req, res) => {
  // Mengambil nilai jariJari dan tinggi dari URL Parameter
  const r = parseInt(req.params.jariJari, 10);
  const t = parseInt(req.params.tinggi, 10);

  // Validasi input
  if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
    return res.status(400).send("Jari-jari dan tinggi harus angka positif.");
  }

  // Function: Luas Lingkaran (Luas Alas Tabung)
  const luasLingkaran = (r) => {
    return PI * r * r;
  };

  // Function: Keliling Lingkaran (Keliling Alas Tabung)
  const kelilingLingkaran = (r) => {
    return 2 * PI * r;
  };

  // Function: Volume Tabung
  const volumeTabung = (r, t) => {
    return luasLingkaran(r) * t;
  };

  const volume = volumeTabung(r, t).toFixed(2);
  const luas = luasLingkaran(r).toFixed(2);
  const keliling = kelilingLingkaran(r).toFixed(2);

  const responseText = `jariJari : ${r}, tinggi: ${t}, volume tabung : ${volume}, luas alas tabung : ${luas}, keliling alas tabung : ${keliling}`;

  res.send(responseText);
});

// ==========================================================
// SOAL 2: Filter Data Orang (Menggunakan Query Parameter)
// Path: /data-orang?umur=X&gender=Y
// ==========================================================
app.get("/data-orang", (req, res) => {
  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    {
      id: 4,
      name: "Benzema",
      umur: 34,
      pekerjaan: "Pemain Bola",
      jenisKelamin: "L",
    },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    {
      id: 9,
      name: "Shohei Ohtani",
      umur: 28,
      pekerjaan: "Pemain Baseball",
      jenisKelamin: "L",
    },
    {
      id: 11,
      name: "Maria Sharapova",
      umur: 35,
      pekerjaan: "Petenis",
      jenisKelamin: "P",
    },
  ];

  const { umur, gender } = req.query;

  let filteredData = dataOrang;

  // Filter berdasarkan Umur (umur diisi, tampilkan data dengan umur >= umur parameter)
  if (umur) {
    const minUmur = parseInt(umur, 10);
    if (!isNaN(minUmur)) {
      filteredData = filteredData.filter((orang) => orang.umur >= minUmur);
    }
  }

  // Filter berdasarkan Gender (gender diisi, tampilkan gender yang dipilih)
  if (gender) {
    const selectedGender = gender.toUpperCase(); // Konversi ke huruf besar untuk konsistensi
    filteredData = filteredData.filter(
      (orang) => orang.jenisKelamin.toUpperCase() === selectedGender
    );
  }

  // Format Output
  if (filteredData.length === 0) {
    return res.send("Tidak ada data yang cocok dengan kriteria filter.");
  }

  const output = filteredData
    .map((orang, index) => {
      return `${index + 1}. ${orang.name} - Pekerjaan: ${
        orang.pekerjaan
      } - Umur: ${orang.umur} Tahun`;
    })
    .join("\n"); 

  res.setHeader("Content-Type", "text/plain"); // Agar output lebih mudah dibaca di browser/postman
  res.send(output);
});

// ==========================================================
// SOAL 3: Detail Data Orang (Menggunakan URL Parameter ID)
// Path: /data-orang/:id
// ==========================================================
app.get("/data-orang/:id", (req, res) => {
  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    {
      id: 4,
      name: "Benzema",
      umur: 34,
      pekerjaan: "Pemain Bola",
      jenisKelamin: "L",
    },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    {
      id: 9,
      name: "Shohei Ohtani",
      umur: 28,
      pekerjaan: "Pemain Baseball",
      jenisKelamin: "L",
    },
    {
      id: 11,
      name: "Maria Sharapova",
      umur: 35,
      pekerjaan: "Petenis",
      jenisKelamin: "P",
    },
  ];

  const idToFind = parseInt(req.params.id, 10);

  // Cari data berdasarkan ID
  const foundPerson = dataOrang.find((orang) => orang.id === idToFind);

  if (!foundPerson) {
    return res.status(404).send("Maaf data tidak ditemukan");
  }

  // Tentukan sapaan (Pak/Ibu)
  const sapaan = foundPerson.jenisKelamin === "L" ? "Pak" : "Ibu";

  // Format output: "Pak John adalah seorang Penulis yang berusia 30 tahun"
  const responseText = `${sapaan} ${foundPerson.name} adalah seorang ${foundPerson.pekerjaan} yang berusia ${foundPerson.umur} tahun`;

  res.send(responseText);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});