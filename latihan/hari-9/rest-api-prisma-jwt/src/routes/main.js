const express = require("express");
const {
  createMovie,
  readById,
  updateMovie,
  deleteMovie,
  readAllMovies,
} = require("../controllers/movieControllers");
const auth = require("../middleware/auth");
const { createCategories, readAllCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const { register, login } = require("../controllers/userController");
const router = express.Router();

router.post("/movies",auth, createMovie);
router.get("/movies", readAllMovies);
router.get("/movie/:id", readById);
router.put("/movie/:id", auth, updateMovie);
router.delete("/movie/:id", auth, deleteMovie);

router.post("/categories", auth, createCategories);
router.get("/categories", readAllCategories);
router.put("/categories/:id", auth, updateCategory);
router.delete("/categories:id", auth, deleteCategory);

router.post("/register", register);
router.post("/login", login)

module.exports = router;
