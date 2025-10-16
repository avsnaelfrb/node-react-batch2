const express = require("express");
const {
  createMovie,
  readMovie,
  readMovieByID,
  deleteMovie,
  updateMovie,
} = require("../controllers/movieControllers");
const router = express.Router();

router.post("/movie", createMovie);
router.get("/movie", readMovie);
router.get("/movie/:id", readMovieByID);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

module.exports = router;
