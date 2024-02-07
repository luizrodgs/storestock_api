import express from "express";

const app = express();

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

export default app;