const express = require("express");
const {
  createMovie,
  readById,
  updateMovie,
  deleteMovie,
  readAllMovies,
} = require("../controllers/movieControllers");
const { basicAuth } = require("../middleware/basicAuth");
const { createCategories, readAllCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/movies",basicAuth, createMovie);
router.get("/movies", readAllMovies);
router.get("/movie/:id", readById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

router.post("/categories", basicAuth, createCategories);
router.get("/categories", readAllCategories);
router.put("/categories/:id", basicAuth, updateCategory);
router.delete("/categories:id", basicAuth, deleteCategory);

module.exports = router;
