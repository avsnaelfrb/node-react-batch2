const express = require("express");
const {
  createMovie,
  readById,
  updateMovie,
  deleteMovie,
  readAllMovies,
} = require("../controllers/movieControllers");
const { basicAuth } = require("../middleware/basicAuth");
const router = express.Router();

router.post("/movies",basicAuth, createMovie);
router.get("/movies", readAllMovies);
router.get("/movie/:id", readById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

module.exports = router;
