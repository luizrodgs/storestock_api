import express from "express";
import products from "./productsRoutes.js";
import brands from "./brandsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("StoreStock - API"));
    app.use(express.json(), products, brands);
};

export default routes;