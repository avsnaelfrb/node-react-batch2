const { connectionPool } = require("../config/db");

function hitungIndeks(nilai) {
  if (nilai >= 80) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 60) {
    return "C";
  } else if (nilai >= 50) {
    return "D";
  } else {
    return "E";
  }
}

exports.createNilai = async (req, res) => {
  const { nama, mata_kuliah, nilai } = req.body;

  if (!nama || !mata_kuliah || nilai === undefined) {
    return res
      .status(400)
      .json({ message: "Nama, mata_kuliah, dan nilai harus diisi" });
  }

  const nilaiNumerik = parseInt(nilai, 10);

  if (isNaN(nilaiNumerik) || nilaiNumerik < 0 || nilaiNumerik > 100) {
    return res
      .status(400)
      .json({ message: "data nilai salah. Nilai harus antara 0 s/d 100" });
  }

  try {
    const indeks_nilai = hitungIndeks(nilaiNumerik);

    const queryText =
      "INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai) VALUES (?, ?, ?, ?)";
    const values = [nama, mata_kuliah, nilaiNumerik, indeks_nilai];

    connectionPool.query(queryText, values, (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "Gagal menyimpan data nilai ke database" });
      }
      res.status(201).json({
        message: "Data nilai mahasiswa berhasil ditambahkan",
        data: {
          id: result.insertId,
          nama,
          mata_kuliah,
          nilai: nilaiNumerik,
          indeks_nilai,
        },
      });
    });
  } catch (error) {
    console.error("Error saat menyimpan nilai:", error);
    res.status(500).json({ message: "Gagal menyimpan data nilai" });
  }
};

exports.getAllNilai = async (req, res) => {
  try {
    const queryText = "SELECT * FROM nilai_mahasiswa";
    connectionPool.query(queryText, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Gagal mengambil data nilai" });
      }
      res.status(200).json({
        message: "Data nilai mahasiswa berhasil diambil",
        data: results,
      });
    });
  } catch (error) {
    console.error("Error saat mengambil nilai:", error);
    res.status(500).json({ message: "Gagal mengambil data nilai" });
  }
};

exports.getNilaiById = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "ID tidak valid" });
  }

  try {
    const queryText = "SELECT * FROM nilai_mahasiswa WHERE id = ?";
    connectionPool.query(queryText, [id], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Gagal mengambil data nilai" });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Data nilai tidak ditemukan" });
      }
      res.status(200).json({
        message: "Data nilai mahasiswa berhasil diambil",
        data: results[0],
      });
    });
  } catch (error) {
    console.error("Error saat mengambil nilai:", error);
    res.status(500).json({ message: "Gagal mengambil data nilai" });
  }
};

exports.updateNilai = async (req, res) => {
  const { id } = req.params;
  const { nama, mata_kuliah, nilai } = req.body;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "ID tidak valid" });
  }

  if (!nama || !mata_kuliah || nilai === undefined) {
    return res
      .status(400)
      .json({ message: "Nama, mata_kuliah, dan nilai harus diisi" });
  }

  const nilaiNumerik = parseInt(nilai, 10);

  if (isNaN(nilaiNumerik) || nilaiNumerik < 0 || nilaiNumerik > 100) {
    return res
      .status(400)
      .json({ message: "data nilai salah. Nilai harus antara 0 s/d 100" });
  }

  try {
    const indeks_nilai = hitungIndeks(nilaiNumerik);

    const queryText =
      "UPDATE nilai_mahasiswa SET nama = ?, mata_kuliah = ?, nilai = ?, indeks_nilai = ? WHERE id = ?";
    const values = [nama, mata_kuliah, nilaiNumerik, indeks_nilai, id];

    connectionPool.query(queryText, values, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Gagal mengupdate data nilai" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data nilai tidak ditemukan" });
      }
      res.status(200).json({
        message: "Data nilai mahasiswa berhasil diupdate",
        data: {
          id: parseInt(id),
          nama,
          mata_kuliah,
          nilai: nilaiNumerik,
          indeks_nilai,
        },
      });
    });
  } catch (error) {
    console.error("Error saat mengupdate nilai:", error);
    res.status(500).json({ message: "Gagal mengupdate data nilai" });
  }
};

exports.deleteNilai = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "ID tidak valid" });
  }

  try {
    const queryText = "DELETE FROM nilai_mahasiswa WHERE id = ?";
    connectionPool.query(queryText, [id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Gagal menghapus data nilai" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data nilai tidak ditemukan" });
      }
      res.status(200).json({
        message: "Data nilai mahasiswa berhasil dihapus",
      });
    });
  } catch (error) {
    console.error("Error saat menghapus nilai:", error);
    res.status(500).json({ message: "Gagal menghapus data nilai" });
  }
};
