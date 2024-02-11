import express from "express";
import BrandController from "../controllers/BrandController.js";

const routes = express.Router();

routes.get("/brands", BrandController.getAllBrands);
routes.get("/brands/:id", BrandController.getBrandByID);
routes.get("/brands/:id/products", BrandController.getAllProductsByBrand);
routes.post("/brands", BrandController.createBrand);
routes.put("/brands/:id", BrandController.updateBrandByID);
routes.delete("/brands/:id", BrandController.deleteBrandByID);

export default routes;