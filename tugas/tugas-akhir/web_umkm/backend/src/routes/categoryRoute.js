import { Router } from "express";
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from "../controllers/categoryController.js";

const route = Router();

route.get("/", getCategory)
route.post("/", createCategory)
route.get("/:id", getCategoryById)
route.put("/:id", updateCategory)
route.delete("/:id", deleteCategory)

export default route