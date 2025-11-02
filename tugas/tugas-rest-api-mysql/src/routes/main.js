const express = require("express");
const {
  createNilai,
  getAllNilai,
  getNilaiById,
  updateNilai,
  deleteNilai,
} = require("../controllers/nilaiController");
const router = express.Router();

router.post("/nilai", createNilai);
router.get("/nilai", getAllNilai);
router.get("/nilai/:id", getNilaiById);
router.put("/nilai/:id", updateNilai);
router.delete("/nilai/:id", deleteNilai);

module.exports = router;

