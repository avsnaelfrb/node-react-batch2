import { Router } from "express";
import { getProduct, createProduct, getProductById, deleteProduct, updateProduct } from "../controllers/productController.js";
// import createProduct from "../controllers/productController.js";

const route = Router();

route.post("/", createProduct);
route.get("/", getProduct)
route.put("/:id", updateProduct)
route.get("/:id", getProductById)
route.delete("/:id", deleteProduct)

export default route;
