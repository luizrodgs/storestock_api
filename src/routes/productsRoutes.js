import express from "express";
import ProductController from "../controllers/ProductController.js";

const routes = express.Router();

routes.get("/products", ProductController.getAllProducts);
routes.get("/products/:id", ProductController.getProductByID);
routes.post("/products", ProductController.createProduct);
routes.put("/products/:id", ProductController.updateProductByID);
routes.delete("/products/:id", ProductController.deleteProductByID);

export default routes;