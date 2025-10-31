import express from "express";
import productRoute from "./productRoute.js";
import categoryRoute from "./categoryRoute.js"
import authRoute from "./authRoute.js"

const route = express.Router();

route.use("/product", productRoute);
route.use("/category", categoryRoute);
route.use("/auth", authRoute)

export default route;
