const express = require("express");
const {
  createMovie,
  readById,
  updateMovie,
  deleteMovie,
  readAllMovies,
} = require("../controllers/movieControllers");
const { createCategories, readAllCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/movies", createMovie);
router.get("/movies", readAllMovies);
router.get("/movie/:id", readById);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

router.post("/categories", createCategories);
router.get("/categories", readAllCategories);
router.put("/categories/:id", updateCategory);
router.delete("/categories:id", deleteCategory);

module.exports = router;
