import express from "express";
import connectToDb from "./config/dbConnect.js";
import product from "./models/Product.js"

const dbConnection = await connectToDb();

dbConnection.on("error", (error) => {
    console.error("Connection error: ", error);
});

dbConnection.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("StoreStock - API")
})

app.get("/products", async (req, res) => {
    const productsList = await product.find({});
    res.status(200).json(productsList);
})

app.get("/products/:id", (req, res) => {
    const index = getProduct(req.params.id);
    res.status(200).json(products[index]);
})

app.post("/products", (req, res) => {
    products.push(req.body);
    res.status(201).send("Product successfully added to database");
});

app.put("/products/update-price/:id", (req, res) => {
    const index = getProduct(req.params.id);
    products[index].price = Number(req.body.price);
    res.status(200).json("Product Price sucessfully updated on database");
})

app.delete("/products/:id", (req, res) => {
    const index = getProduct(req.params.id);
    products.splice(index, 1);
    res.status(200).json("Product sucessfully deleted on database")
})

export default app;