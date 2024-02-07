import express from "express";

const app = express();
app.use(express.json());

const products = {
    "Xbox Series S": "2",
    "Playstation X": "4",
    "RX 5700 XT": "1"
}

app.get("/", (req, res) => {
    res.status(200).send("StoreStock - API")
})

app.get("/products", (req, res) => {
    res.status(200).json(products);
})

app.post("/products", (req, res) => {
    const productName = Object.keys(req.body)[0];
    const productQuantity = req.body[productName];
    products[productName] = productQuantity;
    res.status(201).send("Product successfully added to stock");
});



export default app;