import express from "express";

const app = express();
app.use(express.json());

const products = [
    {
        ID: 1,
        Marca: "Samsung",
        Modelo: "Galaxy S20",
        Serial: "ABC123",
        Quantidade: 10,
        Preço: 1500.00
    },
    {
        ID: 2,
        Marca: "Apple",
        Modelo: "iPhone 12",
        Serial: "DEF456",
        Quantidade: 8,
        Preço: 1200.00
    },
    {
        ID: 3,
        Marca: "Sony",
        Modelo: "PlayStation 5",
        Serial: "GHI789",
        Quantidade: 5,
        Preço: 500.00
    }
];

app.get("/", (req, res) => {
    res.status(200).send("StoreStock - API")
})

app.get("/products", (req, res) => {
    res.status(200).json(products);
})

app.get("/products/")

app.post("/products", (req, res) => {
    products.push(req.body);
    res.status(201).send("Product successfully added to stock");
});

export default app;